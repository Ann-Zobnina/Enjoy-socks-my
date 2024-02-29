import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from './ui/NavBar';
import Footer from './ui/Footer';

export default function App({ children, user }) {
  return (
    <div style={{
      backgroundColor: '#B0C4DE', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}
    >
      <NavBar user={user} />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  );
}
