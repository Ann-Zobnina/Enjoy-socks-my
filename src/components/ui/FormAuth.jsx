import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function FormAuth() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: 'auto' }}>
      <Form style={{ color: 'black' }}>
        <h3 style={{ marginLeft: '250px' }}>ВХОД В ЛИЧНЫЙ КАБИНЕТ</h3>
        <h5>ВХОД</h5>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '300px' }}>
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="E-mail" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" style={{ width: '300px' }}>
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Пароль" style={{ outline: 'none' }} />
        </Form.Group>
        <Button variant="dark" type="submit" style={{ width: '250px', height: '40px' }}>
          ВОЙТИ
        </Button>
      </Form>

      <Form style={{ color: 'black', marginTop: '40px' }}>
        <h5>Регистрация</h5>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '300px' }}>
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="E-mail" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '300px' }}>
          <Form.Label>Имя</Form.Label>
          <Form.Control type="email" placeholder="Ваше Имя" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" style={{ width: '300px' }}>
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Пароль" style={{ outline: 'none' }} />
        </Form.Group>
        <Button variant="dark" type="submit" style={{ width: '250px', height: '40px' }}>
          ЗАРЕГИСТРИРОВАТЬСЯ
        </Button>
      </Form>
    </div>
  );
}
