import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

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
    <>
      <div
        className="card card-light container"
        style={{
          fontSize: '39px',
          fontFamily: '"Caveat", cursive',
        }}
      >
        <h3 className="text-center">Settings</h3>
        <h4>Change++</h4>
        <div className="tshirt color">
          <img
            onClick={() => handleImageClick2('img/1.png')}
            src="img/1.png"
            width="150"
            height="150"
            alt="green-cubes"
            id="cubes"
          />
          <img
            onClick={() => handleImageClick2('img/2.png')}
            src="img/2.png"
            width="150"
            height="150"
            alt="black-dots"
          />
          <img
            onClick={() => handleImageClick2('img/3.png')}
            src="img/3.png"
            width="150"
            height="150"
            alt="black-sky"
          />
          <img
            onClick={() => handleImageClick2('img/4.png')}
            src="img/4.png"
            width="150"
            height="150"
            alt="blue-tshirt"
          />
          <hr />
          <img
            onClick={() => handleImageClick('img/5.png')}
            src="img/5.png"
            width="150"
            height="150"
            alt="cactus-green"
          />
          <img
            onClick={() => handleImageClick('img/6.png')}
            src="img/6.png"
            width="150"
            height="150"
            alt="yoda-white"
          />
          <img
            onClick={() => handleImageClick('img/7.png')}
            src="img/7.png"
            width="150"
            height="150"
            alt="yellow-duck"
          />
          <img
            onClick={() => handleImageClick('img/8.png')}
            src="img/8.png"
            width="150"
            height="150"
            alt="pink-llama"
          />
        </div>
        <hr />
        <h4>Logo Size</h4>
        <Form.Control type="range" min="0" max="100" />
        <hr />
        <h4>Change++</h4>
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
      </div>
      <h4 style={{
        fontSize: '39px',
        fontFamily: '"Caveat", cursive',
      }}
      >
        Цена́++
      </h4>
      <hr />
      <Button>Add to Basket</Button>
      <Button>Wounded</Button>
    </>
  );
}
