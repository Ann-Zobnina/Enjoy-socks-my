import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <img
          src="img/лого.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <Navbar.Brand href="#home">Enjoy socks</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">SignUp/Login</Nav.Link>
          <Nav.Link href="#features">🗑</Nav.Link>
          <Nav.Link href="#pricing">❤️</Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  );
}
