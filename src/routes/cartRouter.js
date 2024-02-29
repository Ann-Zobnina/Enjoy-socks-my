import express from 'express';

const router = express.Router();

router.get('/cart', (req, res) => {
  res.render('CartPage');
});

router.get('/favorite', (req, res) => {
  res.render('FavoritePage');
});

export default router;
