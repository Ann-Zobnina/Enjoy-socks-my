import axios from 'axios';
import React, { useState } from 'react';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';

import { FaHeart, FaShoppingCart, FaTimes } from 'react-icons/fa';

export default function FormSetting({
  socksColors,
  setColor,
  handleDecorClick,
  handleImageClick2,
  socksDecor,
  handleReset,
  deleteDecor,
  deleteImage,
  deleteColor,
  images,
  user,
}) {
  const [colorId, setColorId] = useState(null);
  const [decorId, setDecorId] = useState(null);
  const [imageId, setImageId] = useState(null);

  const handleColorChange = (newColorId, newColor) => {
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

  // test
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
    <>
      <div className="card card-light container" style={{ fontSize: '39px', fontFamily: '"Caveat", cursive', padding: '20px' }}>
        <h3 className="text-center">Собери свой дизайн здесь</h3>
        <div>
          <h4>Узор</h4>
          <h4>Картинка</h4>
          <div
            className="tshirt color"
            style={{
              display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', rowGap: '15px',
            }}
          />
          <h4>Цвет</h4>
          <h4 style={{ fontSize: '39px', fontFamily: '"Caveat", cursive' }}>Цена: 590₽</h4>
          <hr style={{ border: '1px solid blue' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={addToBasket} variant="primary" style={{ width: '45%' }}>
              <FaShoppingCart />
            </Button>
            <Button onClick={addToFavorites} variant="primary" style={{ width: '45%' }}>
              <FaHeart />
            </Button>
          </div>
        </div>
      </div>
      <div className="card card-light container">
        <h3 className="text-center">Settings</h3>
        <div className="text-center">
          <div className="tshirt color">
            {socksDecor.map((decor) => (
              <button key={decor.id} type="button" onClick={() => { handleImageClick2(decor.decor); setDecorId(decor.id); }}>
                <img src={decor.decor} width="150" height="150" alt="cactus-green" />
              </button>
            ))}
            <Button
              onClick={() => {
                socksDecor.forEach((decor) => deleteDecor(decor.decor));
              }}
              variant="primary"
              style={{ width: '45%' }}
            >
              Убрать Узор
            </Button>
            <div />
            {user && user.role && (
              <Row>
                <Col xs={12}>
                  <Form onSubmit={editProfilePic}>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Загрузить декор в формате PNG</Form.Label>
                      <Form.Control name="decor" type="file" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Добавить цвет</Form.Label>
                      <Form.Control name="color" type="text" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Загрузить картинку в формате PNG</Form.Label>
                      <Form.Control name="image" type="file" />
                    </Form.Group>
                    <Button
                      style={{
                        backgroundImage: 'linear-gradient(to right, #c0392b 0%, #8e44ad  51%, #c0392b  100%)', padding: '20px 80px', textAlign: 'center', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '10px', marginLeft: '40px',
                      }}
                      type="submit"
                    >
                      Отправить
                    </Button>
                  </Form>
                </Col>
              </Row>
            )}
            <hr />
            {images.map((image) => (
              <button key={image.id} type="button" onClick={() => { handleDecorClick(image.image); setImageId(image.id); }}>
                <img src={image.image} width="150" height="150" alt="cactus-green" />
              </button>
            ))}
            <Button
              onClick={() => {
                socksDecor.forEach((image) => deleteImage(image.image));
              }}
              variant="primary"
              style={{ width: '45%' }}
            >
              Убрать Картинку
            </Button>
          </div>
        </div>
        <hr />

        <Form.Select
          className="form-control form-control-sm mb-2"
          onChange={(e) => handleColorChange(e.target.value, e.target.options[e.target.selectedIndex].text)}
          value={socksColors}
        >
          {socksColors.map((colorOption) => (
            <option key={colorOption.id} value={colorOption.id} style={{ backgroundColor: `${colorOption.color}` }}>
              {/* <FaSquareFull style={{ color: 'pink' }} /> */}
              {colorOption.color}
            </option>
          ))}
        </Form.Select>
        <Button
          onClick={() => {
            socksDecor.forEach((color) => deleteColor(color.color));
          }}
          variant="primary"
          style={{ width: '45%' }}
        >
          Убрать Цвет
        </Button>
      </div>
      <hr />
    </>
  );
}
