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
          src="img/лого.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <Navbar.Brand href="/" style={{ marginLeft: '20px' }}>Enjoy socks</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/api/auth/bin" style={{ marginLeft: '850px', marginRight: '35px' }}><FaShoppingCart /></Nav.Link>
          <Nav.Link href="/api/auth/favorite" style={{ marginRight: '35px' }}><FaHeart /></Nav.Link>
          <Nav.Link href="/api/auth/login" style={{ marginRight: '5px' }}>
            <FaSignInAlt />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
