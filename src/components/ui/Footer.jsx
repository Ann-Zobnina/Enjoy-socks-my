import React from 'react';
import Container from 'react-bootstrap/Container';
import { FaPhone, FaEnvelope, FaHome } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted mt-5">
      <Container>
        <div className="py-4">
          <h6 className="text-uppercase fw-bold mb-4">CONTACT</h6>
          <p>
            <FaHome className="me-3" />
            {' '}
            г. Москва, Шоссе Энтузиастов 12 ст2
          </p>
          <p>
            <FaEnvelope className="me-3" />
            {' '}
            info@enjoysocks.ru
          </p>
          <p>
            <FaPhone className="me-3" />
            {' '}
            +7 999 666 36 36
          </p>
        </div>
      </Container>
    </footer>
  );
}
