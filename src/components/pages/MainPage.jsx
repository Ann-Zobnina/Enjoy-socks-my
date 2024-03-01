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
            backgroundColor: '#FABA35',
            padding: '20px 50px',
            textAlign: 'center',
            color: '#000',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '10px',
            // marginLeft: '40px',
          }}
          onClick={onClickHandler}
        >
          Сгенерировать
        </Button>
      </div>
    </Container>
  );
}
