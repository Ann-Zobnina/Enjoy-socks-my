import express from 'express';
import { checkAuthFactory } from '../middlewares/checkAuthFactory';

import { Sock, Cart } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('Page');
});

router.get('/cart', checkAuthFactory(true), async (req, res) => {
  try {
    const socksInCart = await Cart.findAll({ where: { id: res.locals?.user?.id } });
    const socks = socksInCart.get();
    res.render('CartPage', { socks });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get('/favorite', checkAuthFactory(true), async (req, res) => {
  try {
    const favoriteSocks = await Sock.findAll({
      where: {
        id: res.locals?.user?.id,
        favorite: true,
      },
    });
    const socks = favoriteSocks.get();
    res.render('FavoritePage', { socks });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

export default router;
