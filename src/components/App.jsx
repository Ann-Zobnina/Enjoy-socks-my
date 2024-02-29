import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from './ui/NavBar';
import Footer from './ui/Footer';

export default function App({ children, user }) {
  return (
    <div style={{
      height: '100vh', backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}
    >
      <NavBar user={user} />
      {/* <div style={{ backgroundColor: '#B0C4DE' }}> */}
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            {children}
          </Col>
        </Row>
      </Container>
      {/* </div> */}
      <Footer />
    </div>
  );
}
