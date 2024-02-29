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
      console.log(formData);
      const response = await axios.post('/api/auth/login', formData);
      if (response.status === 200) {
        window.location = '/';
      }
      alert('Вы успешно залогинились'); // test что воркает
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  const submitHandlerRegister = async (event) => {
    event.preventDefault();
    try {
      const formData = Object.fromEntries(new FormData(event.target));
      console.log(formData);
      const response = await axios.post('/api/auth/signup', formData);
      if (response.status === 200) {
        window.location = '/';
      }
      event.target.reset();
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
          <Form.Control type="email" name="email" placeholder="E-mail" style={{ ...inputStyle, height: '42.5px' }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" name="password" placeholder="Пароль" style={{ ...inputStyle, height: '42.5px' }} />
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
          <Form.Control value={value.name} onChange={changeHandler} name="name" type="text" placeholder="Ваше Имя" style={{ ...inputStyle }} />
          <Form.Text id="passwordHelpBlock" muted>
            Имя должно быть от 3 символов, при этом
            {' '}
            <br />
            {' '}
            не содержать пробелы
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control onChange={changeHandler} name="password" type="password" placeholder="Пароль" style={{ ...inputStyle, height: '42.5px' }} />
          <Form.Text id="passwordHelpBlock" muted>
            Пароль должен быть от 12 символов, при этом
            {' '}
            <br />
            {' '}
            не содержать пробелы и специальные символы
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Подтвердите пароль</Form.Label>
          <Form.Control value={value.password} onChange={changeHandler} type="password" placeholder="Подтвердите пароль" style={{ ...inputStyle, height: '42.5px', color: validPassword(value.password) ? 'green' : 'red' }} />
        </Form.Group>
        {validPassword(value.password) && validUsername(value.name) && validEmail(value.email)
          ? (
            <Button variant="success" type="submit" style={{ width: '250px', height: '40px' }}>
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
          )
          : (
            <Button variant="danger" type="submit" style={{ width: '250px', height: '40px' }} disabled>
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
          )}
      </Form>
    </Container>
  );
}
