import React from 'react';
import { Button, Container } from 'react-bootstrap';

export default function MainPage() {
  const onClickHandler = () => {
    window.location = '/generate';
  };

  return (
    <Container>
      <div
        style={{
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '39px',
            fontFamily: '"Caveat", cursive',
          }}
        >
          Enjoy socks
        </h1>
        <p>Самое время быть уникальным! Смоделируй свою любимую пару носков!</p>
        <Button
          style={{
            backgroundImage: 'linear-gradient(to right, #c0392b 0%, #8e44ad  51%, #c0392b  100%)',
            padding: '20px 80px',
            textAlign: 'center',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '10px',
            marginLeft: '40px',
          }}
          onClick={onClickHandler}
        >
          Сгенерировать
        </Button>
      </div>
    </Container>
  );
}
