import express from 'express';
import checkAuthFactory from '../middlewares/checkAuthFactory';

import { Sock, Cart } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('FormGenerate');
});

router.get('/login', async (req, res) => {
  res.render('FormAuth');
});

router.get('/cart', checkAuthFactory(true), async (req, res) => {
  try {
    const socks = await Cart.findAll({ where: { userId: res.locals?.user?.id } });
    res.render('CartPage', { socks });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get('/favorite', checkAuthFactory(true), async (req, res) => {
  try {
    const socks = await Sock.findAll({
      where: {
        userId: res.locals?.user?.id,
        favorite: true,
      },
    });
    res.render('FavoritePage', { socks });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

export default router;
