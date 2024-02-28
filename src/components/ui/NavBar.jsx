import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <NavBar className="bg-body-tertiary">
      <Container>

        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Nav href="#home">
              <img
                alt=""
                src="/img/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Nav>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

      </Container>
    </NavBar>
  );
}
