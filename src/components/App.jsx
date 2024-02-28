import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from './ui/NavBar';
import Footer from './ui/Footer';

export default function App({ children }) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12}>
          <NavBar />
        </Col>
        <Col xs={10}>{children}</Col>
      </Row>
      <Footer />
    </Container>

  );
}
