import React from 'react';
import { Col, Row } from 'react-bootstrap';
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
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <img
            style={{ display: 'block' }}
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
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          {user ? (
            <>
              <div>{user.name}</div>
              <Nav.Link href="/cart"><FaShoppingCart /></Nav.Link>
              <Nav.Link href="/favorite">
                <FaHeart />
              </Nav.Link>
              <Nav.Link href="/api/auth/logout">
                <FaSignInAlt />
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/login">
                Войти
              </Nav.Link>
              <Nav.Link href="/render/cart" style={{ color: 'white' }}><FaShoppingCart /></Nav.Link>
            </>
          )}
        </div>
      </Container>
    </Navbar>
  );
}
