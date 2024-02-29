import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  FaShoppingCart, FaHeart, FaSignInAlt,
} from 'react-icons/fa';

export default function NavBar({ user }) {
  return (
    <Navbar bg="light" data-bs-theme="light" style={{ fontSize: '25.6px' }}>
      <Container>
        <img
          src="img/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <Navbar.Brand href="/" style={{ marginLeft: '20px' }}>
          Enjoy socks
        </Navbar.Brand>
        {user ? (
          <>
            <div style={{ marginLeft: '720px' }}>{user.name}</div>
            <Nav.Link href="/render/cart"><FaShoppingCart /></Nav.Link>
            <Nav.Link href="#pricing">
              <FaHeart />
            </Nav.Link>
            <Nav.Link href="/api/auth/logout" style={{ marginRight: '5px' }}>
              <FaSignInAlt />
            </Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link href="/login" style={{ marginLeft: '720px' }}>
              Войти
            </Nav.Link>
            <Nav.Link href="/render/cart"><FaShoppingCart /></Nav.Link>
          </>
        )}
      </Container>
    </Navbar>
  );
}
