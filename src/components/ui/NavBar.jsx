import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart, FaHeart, FaSignInAlt } from 'react-icons/fa';

export default function NavBar() {
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
        <Navbar.Brand href="/">Enjoy socks</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/api/auth/login">
            <FaSignInAlt />
          </Nav.Link>
          <Nav.Link href="#features">
            <FaShoppingCart />
          </Nav.Link>
          <Nav.Link href="#pricing">
            <FaHeart />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
