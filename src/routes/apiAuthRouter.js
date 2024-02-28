import express from 'express';

const apiAuthRouter = express.Router();

apiAuthRouter.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

export default apiAuthRouter;
