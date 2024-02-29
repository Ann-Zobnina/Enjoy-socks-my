import { Router } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';
import generateTokens from '../utils/generateTokens';
import cookiesConfig from '../config/cookiesConfig';

const apiAuthRouter = Router();

apiAuthRouter.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) return res.status(400).json({ message: 'Не все поля заполнены!' });
    const [targetUser, created] = await User.findOrCreate({
      where: { email },
      defaults: { name, email, hashpass: await bcrypt.hash(password, 10) },
    });
    if (!created) throw new Error('Пользователь с таким e-mail уже зарегистрирован!');

    const user = targetUser.get();
    delete user.hashpass;

    const { accessToken, refreshToken } = generateTokens({ user });

    res.cookie('accessToken', accessToken, cookiesConfig.access)
      .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
      .sendStatus(200);
  } catch (err) {
    res.status(403).json(err.message);
  }
});

apiAuthRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) throw new Error('Не все поля заполнены!');
  } catch (err) {
    res.status(404).json({ message: err.message });
  }

  const targetUser = await User.findOne({
    where: { email },
  });
  if (!targetUser) return res.json({ message: 'Пользователь с таким e-mail не найден!' });
  const passwordIsCorrect = await bcrypt.compare(password, targetUser.hashpass);
  if (!passwordIsCorrect) return res.status(403).json({ message: 'Incorrect password' });

  const user = targetUser.get();
  delete user.hashpass;

  const { accessToken, refreshToken } = generateTokens({ user });
  res.cookie('accessToken', accessToken, cookiesConfig.access)
    .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
    .sendStatus(200);
});

apiAuthRouter.get('/logout', (req, res) => {
  res.clearCookie('accessToken')
    .clearCookie('refreshToken')
    .redirect('/');
});

export default apiAuthRouter;
