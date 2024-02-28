import { Router } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';
import generateTokens from '../utils/generateTokens';
import cookiesConfig from '../config/cookiesConfig';

const apiAuthRouter = Router();

apiAuthRouter.get('/', (req, res) => {
  res.render('FormAuth');
});

apiAuthRouter.post('/reg', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) throw new Error('Не все поля заполнены!');
    const [targetUser, created] = await User.findOrCreate({
      where: { email },
      defaults: { name, email, hashpass: await bcrypt.hash(password, 10) },
    });
    if (!created) throw new Error('Email already exists');

    const user = targetUser.get();
    delete user.hashpass;

    const { accessToken, refreshToken } = generateTokens({ user });

    res.cookie('accessToken', accessToken, cookiesConfig.access)
      .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
      .sendStatus(200);
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
});

apiAuthRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) throw new Error('Email is required');
    if (!password) throw new Error('Password is required');
  } catch (err) {
    res.status(404).json({ message: err.message });
  }

  const targetUser = await User.findOne({
    where: { email },
  });
  if (!targetUser) return res.json({ message: 'User not found' });
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
