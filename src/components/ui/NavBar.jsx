import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  FaShoppingCart, FaHeart, FaSignInAlt,
} from 'react-icons/fa';

export default function NavBar({ user }) {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      style={{
        backgroundColor: '#474A51',
        fontSize: '39px',
        fontFamily: '"Caveat", cursive',
        color: 'white',
      }}
    >
      <Container>
        <img
          src="img/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <div>
          <Navbar.Brand
            href="/"
            style={{
              fontSize: '39px',
              fontFamily: '"Caveat", cursive',
            }}
          >
            Enjoy socks
          </Navbar.Brand>
        </div>
        {user ? (
          <>
            <div style={{ marginLeft: '720px' }}>{user.name}</div>
            <Nav.Link href="/cart"><FaShoppingCart /></Nav.Link>
            <Nav.Link href="/favorite">
              <FaHeart />
            </Nav.Link>
            <Nav.Link href="/api/auth/logout" style={{ marginRight: '5px' }}>
              <FaSignInAlt />
            </Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link href="/login" style={{ marginLeft: '885px' }}>
              Войти
            </Nav.Link>
            <Nav.Link href="/render/cart" style={{ color: 'white' }}><FaShoppingCart /></Nav.Link>
          </>
        )}
      </Container>
    </Navbar>
  );
}
