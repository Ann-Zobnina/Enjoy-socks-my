import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import {
  Sock, Order, Cart, Color, Decor, Image,
} from '../../db/models';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const cwd = process.cwd();
    cb(null, path.resolve(cwd, 'public'));
  },
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `/img/${file.fieldname}-${uniqueSuffix}.png`);
  },
});

const upload = multer({ storage });

const apiActionSockRouter = Router();

apiActionSockRouter.post('/sock/like', async (req, res) => {
  const { colorId, decorId, imageId } = req.body;
  console.log(req.body, '123123123123', res.locals?.user?.id);
  try {
    // Создаем товар (носок) и сохраняем его
    const sock = await Sock.create({
      userId: res.locals?.user?.id,
      colorId,
      decorId,
      imageId,
    });

    // Создаем заказ и связываем его с созданным носком
    const order = await Cart.create({
      userId: res.locals?.user?.id,
      sockId: sock.id, // Используем идентификатор созданного носка
    });

    // Отправляем ответ клиенту
    res.status(201).json({ success: true, sock, order });
  } catch (error) {
    // Если произошла ошибка, отправляем соответствующий статус и сообщение об ошибке
    res.status(500).json({ success: false, message: error.message });
  }
});

apiActionSockRouter.post('/sock/basket', async (req, res) => {
  const { colorId, decorId, imageId } = req.body;
  console.log(req.body, '123123123123', res.locals?.user?.id);
  try {
    // Создаем товар (носок) и сохраняем его
    const sock = await Sock.create({
      userId: res.locals?.user?.id,
      colorId,
      decorId,
      imageId,
    });

    // Создаем заказ и связываем его с созданным носком
    const order = await Order.create({
      userId: res.locals?.user?.id,
      sockId: sock.id, // Используем идентификатор созданного носка
    });

    // Отправляем ответ клиенту
    res.status(201).json({ success: true, sock, order });
  } catch (error) {
    // Если произошла ошибка, отправляем соответствующий статус и сообщение об ошибке
    res.status(500).json({ success: false, message: error.message });
  }
});
apiActionSockRouter.post('/sock/add', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'decor', maxCount: 1 },
]), async (req, res) => {
  try {
    const { img, decor, color } = req.body;

    // Создаем новую запись цвета
    await Color.create({ color });

    // Создаем новую запись декора
    await Decor.create({ decor: req.files.decor[0].filename });
    // Создаем новую запись изображения
    await Image.create({ image: req.files.image[0].filename });

    // Отправляем успешный ответ клиенту
    res.status(201).json({ success: true, message: 'Fields added successfully' });
  } catch (error) {
    // Если произошла ошибка, отправляем соответствующий статус и сообщение об ошибке
    console.error('Error while adding fields:', error);
    res.status(500).json({ success: false, message: 'Error while adding fields' });
  }
});

export default apiActionSockRouter;
