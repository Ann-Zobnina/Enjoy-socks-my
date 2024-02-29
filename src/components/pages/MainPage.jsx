import React from 'react';
import { Button, Container } from 'react-bootstrap';

export default function MainPage() {
  const onClickHandler = () => {
    window.location = '/generate';
  };

  return (
    <Container>
      <div style={{
        minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <h1 style={{ textAlign: 'center' }}>Enjoy socks</h1>
        <p>Самое время быть уникальным! Смоделируй свою любимую пару носков!</p>
        <Button onClick={onClickHandler}>Сгенерировать</Button>
      </div>
    </Container>
  );
}
