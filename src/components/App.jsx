import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './ui/NavBar';
import Footer from './ui/Footer';

export default function App({ children, user }) {
  return (
    <div style={{
      backgroundColor: '#FB7C82', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
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
