import axios from 'axios';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import validPassword from '../../middlewares/validPassword';
import validUsername from '../../middlewares/validUsername';
import validEmail from '../../middlewares/validEmail';

export default function FormAuth() {
  const inputStyle = {
    width: '300px',
    outline: 'none',
    border: '1px solid #ced4da',
    boxShadow: 'none',
  };

  const [value, setInput] = useState({
    email: '',
    password: '',
    user: '',
  });

  const changeHandler = (elem) => {
    setInput((prev) => ({
      ...prev, [elem.target.name]: elem.target.value,
    }));
  };

  const submitHandlerLogin = async (event) => {
    event.preventDefault();
    try {
      const formData = Object.fromEntries(new FormData(event.target));
      const response = await axios.post('api/auth/login', formData);
      if (response.status === 200) {
        alert('Вы успешно залогинились'); // test что воркает
        window.location = '/';
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  const submitHandlerRegister = async (event) => {
    event.preventDefault();
    try {
      const formData = Object.fromEntries(new FormData(event.target));
      const response = await axios.post('api/auth/signup', formData);
      if (response.status === 200) {
        alert('Вы успешно зарегистрировались'); // test что воркает //aaaddd //
        window.location = '/';
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  return (
    <Container style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      margin: 'auto',
      marginTop: '40px',
    }}
    >
      <Form onSubmit={submitHandlerLogin} style={{ color: 'black' }}>
        <h3 style={{ marginLeft: '300px' }}>ВХОД В ЛИЧНЫЙ КАБИНЕТ</h3>
        <h5>ВХОД</h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="E-mail" style={{ ...inputStyle, height: '42.5px' }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Пароль" style={{ ...inputStyle, height: '42.5px' }} />
        </Form.Group>
        <Button variant="dark" type="submit" style={{ width: '250px', height: '40px' }}>
          ВОЙТИ
        </Button>
      </Form>

      <Form onSubmit={submitHandlerRegister} style={{ color: 'black', marginTop: '40px' }}>
        <h5>Регистрация</h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control value={value.email} onChange={changeHandler} name="email" type="email" placeholder="E-mail" style={{ ...inputStyle, height: '42.5px' }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Имя</Form.Label>
          <Form.Control value={value.userName} onChange={changeHandler} name="userName" type="text" placeholder="Ваше Имя" style={{ ...inputStyle }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control onChange={changeHandler} name="password" type="password" placeholder="Пароль" style={{ ...inputStyle, height: '42.5px' }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Подтвердите пароль</Form.Label>
          <Form.Control value={value.password} type="password" placeholder="Подтвердите пароль" style={{ ...inputStyle, height: '42.5px', color: validPassword(value.password) ? 'green' : 'red' }} />
        </Form.Group>
        {validPassword(value.password) && validUsername(value.userName) && validEmail(value.email)
          ? (
            <Button variant="success" type="submit" style={{ width: '250px', height: '40px' }}>
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
          )
          : (
            <Button variant="danger" type="submit" style={{ width: '250px', height: '40px' }}>
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
          )}
      </Form>
    </Container>
  );
}

// валидацию паролей мб сделать? это изи
// хочу сделать упр инпуты чтобы пользователь собственно не мог вводить лишнюю инфу ( валидатион добавить)