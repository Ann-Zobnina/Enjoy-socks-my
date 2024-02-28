import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/verifyTokens';
import { Sock, Cart } from '../../db/models';

const apiChangeRouter = Router();

apiChangeRouter.get(verifyAccessToken, '/:id/cart', async (req, res) => {
  const socks = await Cart.findAll({ where: { id: req.params.id } });
  const socksInCart = socks.get();
  res.json(socksInCart);
});

apiChangeRouter.get(verifyAccessToken, '/:id/favorites', async (req, res) => {
  const socks = await Sock.findAll({
    where: {
      id: req.params.id,
      favorite: true,
    },
  });
  const favoriteSocks = socks.get();
  res.json(favoriteSocks);
});

export default apiChangeRouter;
