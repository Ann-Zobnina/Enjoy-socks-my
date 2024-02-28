import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/verifyTokens';
import { Sock, Cart } from '../../db/models';

const apiChangeRouter = Router();

apiChangeRouter.route('/:id/cart')
  .get(verifyAccessToken, async (req, res) => {
    const socks = await Cart.findAll({ where: { id: req.params.id } });
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
          userId: req.params.id,
          id: req.body.id,
        },
      });
      res.sendStatus(200);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

apiChangeRouter.route('/:id/favorites')
  .get(verifyAccessToken, async (req, res) => {
    try {
      const socks = await Sock.findAll({
        where: {
          id: req.params.id,
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
      await Sock.update(req.body, { where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

export default apiChangeRouter;
