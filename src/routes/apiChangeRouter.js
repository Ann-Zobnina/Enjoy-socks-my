import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/verifyTokens';
import { checkAuthFactory } from '../middlewares/checkAuthFactory';

import { Sock, Cart } from '../../db/models';

const apiChangeRouter = Router();

// Cart
apiChangeRouter.route('/cart')
  .get(checkAuthFactory, async (req, res) => {
    const socks = await Cart.findAll({ where: { id: res.locals?.user?.id } });
    const socksInCart = socks.get();
    res.json(socksInCart);
  })
  .post(verifyAccessToken, async (req, res) => {
    const { color, decor, pic } = req.body;
    try {
      if (!color || !decor || !pic) throw new Error('Не все поля заполнены!');
      const [targetSock, created] = await Sock.findOrCreate({
        where: { color, decor, pic },
        defaults: { color, decor, pic },
      });
      if (!created) {
        await Sock.update({ color }, { where: { id: targetSock.id } });
      }

      const sock = targetSock.get();
      res.json(sock);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  })
  .delete(verifyAccessToken, async (req, res) => {
    try {
      await Cart.destroy({
        where: {
          userId: res.locals?.user?.id,
          id: req.body.id,
        },
      });
      res.sendStatus(200);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// Favorites
apiChangeRouter.route('/favorites')
  .get(checkAuthFactory, async (req, res) => {
    try {
      const socks = await Sock.findAll({
        where: {
          id: res.locals?.user?.id,
          favorite: true,
        },
      });
      const favoriteSocks = socks.get();
      res.json(favoriteSocks);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  })
  .put(verifyAccessToken, async (req, res) => {
    try {
      await Sock.update(req.body, {
        where: {
          userId: res.locals?.user?.id,
          id: req.body.id,
        },
      });
      res.sendStatus(200);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

export default apiChangeRouter;
