import axios from 'axios';
import React, { useState } from 'react';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';

import {
  FaHeart, FaShoppingCart, FaTimes,
} from 'react-icons/fa';

export default function FormSetting({
  socksColors,
  setColor,
  handleDecorClick,
  handleImageClick2,
  socksDecor,
  handleReset,
  images,
  user,
}) {
  const [colorId, setColorId] = useState(null);
  const [decorId, setDecorId] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [displayDownload, setDisplayDownload] = useState(false);

  const handleColorChange = (newColorId, newColor) => {
    console.log('text: ', newColor);
    const colorIdNumber = parseInt(newColorId, 10);
    setColorId(colorIdNumber);
    setColor(newColor);
  };

  const editProfilePic = async (event) => {
    event.preventDefault();
    console.log('Submitting form...');
    const formData = new FormData(event.target);
    await axios.post('/api/action/sock/add', formData);
  };

  const addToBasket = async () => {
    try {
      const dataToSend = {
        colorId,
        decorId,
        imageId,
      };

      const response = await fetch('/api/action/sock/basket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
    handleReset();
  };

  const addToFavorites = async () => {
    try {
      const dataToSend = {
        colorId,
        decorId,
        imageId,
      };

      const response = await fetch('/api/action/sock/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
    handleReset();
  };

  return (
    <div className="card card-light container" style={{ fontSize: '39px', fontFamily: '"Caveat", cursive', padding: '20px' }}>
      <h3 className="text-center">Собери свой дизайн здесь (цена всех носков 590₽)</h3>
      <div>
        <h4>Цвет</h4>
        <Form.Select
          className="form-control form-control-sm mb-2"
          onChange={(e) => handleColorChange(e.target.value, e.target.options[e.target.selectedIndex].text)}
          value={socksColors}
        >
          {socksColors.map((colorOption) => (
            <option key={colorOption.id} value={colorOption.id} style={{ backgroundColor: `${colorOption.color}` }}>
              {colorOption.color}
            </option>
          ))}
        </Form.Select>
        <h4>Узор</h4>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {socksDecor.map((decor) => (
            <button key={decor.id} type="button" style={{ borderRadius: '8px' }} onClick={() => { handleImageClick2(decor.decor); setDecorId(decor.id); }}>
              <img src={decor.decor} width="100" height="100" alt="decor for socks" />
            </button>
          ))}
        </div>
        <h4>Картинка</h4>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {images.map((image) => (
            <button key={image.id} type="button" style={{ borderRadius: '8px' }} onClick={() => { handleDecorClick(image.image); setImageId(image.id); }}>
              <img src={image.image} width="100" height="100" alt="image for socks" />
            </button>
          ))}
        </div>
        {user.role && (
          <>
            <Button variant="primary" type="submit" style={{ width: '100%' }} onClick={() => setDisplayDownload(!displayDownload)}>
              Добавить декор/картинку
            </Button>
            <Row style={{
              display: displayDownload ? 'block' : 'none', border: '2px solid pink', borderRadius: '10px', margin: '20px 0',
            }}
            >
              <Col xs={12}>
                <Form onSubmit={editProfilePic}>
                  <Form.Group controlId="formFile" className="mb-3">
                    <h4>Загрузить декор в формате PNG</h4>
                    <Form.Control name="decor" type="file" />
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                    <h4>Загрузить картинку в формате PNG</h4>
                    <Form.Control name="image" type="file" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Загрузить
                  </Button>
                </Form>
              </Col>
            </Row>
          </>
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="primary" style={{ width: '30%' }}>
            <FaShoppingCart onClick={addToBasket} />
          </Button>
          <Button variant="primary" style={{ width: '30%' }}>
            <FaHeart onClick={addToFavorites} />
          </Button>
          <Button variant="primary" style={{ width: '30%' }}>
            <FaTimes onClick={() => handleReset()} />
          </Button>
        </div>
      </div>
    </div>
  );
}
