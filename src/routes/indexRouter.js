import express from 'express';
import checkAuthFactory from '../middlewares/checkAuthFactory';

import {
  Sock, Cart, Decor, Color, Image, User,
} from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('MainPage');
});

router.get('/generate', async (req, res) => {
  const socksColors = await Color.findAll();
  const socksDecor = await Decor.findAll();
  const images = await Image.findAll();
  const { id } = res.locals.user;
  const user = await User.findOne({ where: { id } });

  const allAboutSock = {
    socksColors, socksDecor, images, user,
  };
  console.log(socksColors, '<---------');
  res.render('FormGenerate', allAboutSock);
});

router.get('/login', async (req, res) => {
  res.render('FormAuth');
});

router.get('/cart', async (req, res) => {
  try {
    const userId = res.locals.user.id;
    const socks = await Sock.findAll({
      where: { userId },
      include: [Color, Image, Decor],
    });

    res.render('CartPage', { socks });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get('/favorite', checkAuthFactory(true), async (req, res) => {
  try {
    const userId = res.locals.user.id;

    const socks = await Sock.findAll({
      where: { userId },
      include: [Color, Image, Decor],
    });

    res.render('FavoritePage', { socks });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

export default router;
