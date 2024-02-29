import { Router } from 'express';
import { verifyAccessToken } from '../middlewares/verifyTokens';

import { Sock, Cart } from '../../db/models';

const apiChangeRouter = Router();

// Cart
apiChangeRouter.route('/cart')
  .post(async (req, res) => {
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
      res.status(500).json(err.message);
    }
  })
  .delete(async (req, res) => {
    try {
      await Cart.destroy({
        where: {
          userId: res.locals?.user?.id,
          id: req.body.id,
        },
      });
      res.sendStatus(200);
    } catch (err) {
      res.status(500).json(err.message);
    }
  });

// Favorites
apiChangeRouter.put('/favorites', verifyAccessToken, async (req, res) => {
  try {
    await Sock.update(req.body, {
      where: {
        userId: res.locals?.user?.id,
        id: req.body.id,
      },
    });
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

export default apiChangeRouter;
