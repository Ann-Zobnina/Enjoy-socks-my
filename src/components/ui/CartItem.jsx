import React from 'react';
import { Card, CloseButton } from 'react-bootstrap';
import Svg from './Svg';

export default function CartItem({ item, changeHandler, deleteHandler }) {
  const isFavorites = true;
  return (
    <Card style={{ width: '370px' }}>
      <Card.Header as="h5" style={{ display: 'flex', justifyContent: 'space-between' }}>
        Sock
        <CloseButton onClick={() => deleteHandler(item.id)} />
      </Card.Header>
      <Card.Body style={{ backgroundColor: 'black', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
        <Svg
          setColor={item.Color.color}
          isFavorites={isFavorites}
          style={{ position: 'relative' }}
        />
        <img
          src={item.Decor.decor}
          alt="Selected"
          width="300"
          height="350"
          style={{ position: 'absolute', top: '55px', left: '20px' }}
        />
        <img
          src={item.Image.image}
          alt="Selected"
          width="70"
          height="70"
          style={{ position: 'absolute', top: '100px', left: '120px' }}
        />
      </Card.Body>
    </Card>
  );
}
