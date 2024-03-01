import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

export default function FormSetting({
  socksColors,
  setColor: setParentColor,
  handleImageClick,
  handleImageClick2,
}) {
  const [currentColor, setColor] = useState(socksColors);

  const handleColorChange = (newColor) => {
    setColor(newColor);
    setParentColor(newColor); // Обновляем цвет в родительском компоненте
  };

  return (
    <div
      className="card card-light container"
      style={{
        fontSize: '39px',
        fontFamily: '"Caveat", cursive',
        padding: '20px',
      }}
    >
      <h3 className="text-center">Собери свой дизайн здесь</h3>
      <div>
        <h4>Узор</h4>
        <div
          className="tshirt color"
          style={{
            display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', rowGap: '15px',
          }}
        >
          <img
            style={{ border: '2px solid grey', borderRadius: '10px' }}
            onClick={() => handleImageClick2('img/2.png')}
            src="img/1.png"
            width="150"
            height="150"
            alt="green-cubes"
            id="cubes"
          />
          <img
            style={{ border: '2px solid grey', borderRadius: '10px' }}
            onClick={() => handleImageClick2('img/2.png')}
            src="img/2.png"
            width="150"
            height="150"
            alt="black-dots"
          />
          <img
            style={{ border: '2px solid grey', borderRadius: '10px' }}
            onClick={() => handleImageClick2('img/3.png')}
            src="img/3.png"
            width="150"
            height="150"
            alt="black-sky"
          />
          <img
            style={{ border: '1px solid ', borderRadius: '10px' }}
            onClick={() => handleImageClick2('img/4.png')}
            src="img/4.png"
            width="150"
            height="150"
            alt="blue-tshirt"
          />
        </div>
        {/* <hr style={{ border: '1px solid blue' }} /> */}
        <h4>Картинка</h4>
        <div
          className="tshirt color"
          style={{
            display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', rowGap: '15px',
          }}
        >
          <img
            style={{ border: '2px solid grey', borderRadius: '10px' }}
            onClick={() => handleImageClick('img/5.png')}
            src="img/5.png"
            width="150"
            height="150"
            alt="cactus-green"
          />
          <img
            style={{ border: '2px solid grey', borderRadius: '10px' }}
            onClick={() => handleImageClick('img/6.png')}
            src="img/6.png"
            width="150"
            height="150"
            alt="yoda-white"
          />
          <img
            style={{ border: '2px solid grey', borderRadius: '10px' }}
            onClick={() => handleImageClick('img/7.png')}
            src="img/7.png"
            width="150"
            height="150"
            alt="yellow-duck"
          />
          <img
            style={{ border: '2px solid grey', borderRadius: '10px' }}
            onClick={() => handleImageClick('img/8.png')}
            src="img/8.png"
            width="150"
            height="150"
            alt="pink-llama"
          />
        </div>
      </div>
      {/* <hr style={{ border: '1px solid blue' }} /> */}
      <h4>Размер картинки</h4>
      <Form.Control type="range" min="0" max="100" />
      {/* <hr /> */}
      <h4>Цвет</h4>
      <Form.Select
        className="form-control form-control-sm mb-2"
        onChange={(e) => handleColorChange(e.target.value)}
        value={currentColor}
      >
        <option value="grey">Grey</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="white">White</option>
        <option value="black">Black</option>
      </Form.Select>
      <h4 style={{
        fontSize: '39px',
        fontFamily: '"Caveat", cursive',
      }}
      >
        Цена: 590₽
      </h4>
      <hr style={{ border: '1px solid blue' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="primary" style={{ width: '45%' }}>
          <FaShoppingCart />
        </Button>
        <Button variant="primary" style={{ width: '45%' }}>
          <FaHeart />
        </Button>
      </div>
    </div>
  );
}
