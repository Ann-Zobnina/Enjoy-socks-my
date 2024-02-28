import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from './ui/NavBar';
import Footer from './ui/Footer';

export default function App({ children }) {
  return (
    <>
      <NavBar />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            {children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
