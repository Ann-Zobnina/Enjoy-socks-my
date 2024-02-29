import React from 'react';
import Container from 'react-bootstrap/Container';
import { FaPhone, FaEnvelope, FaHome } from 'react-icons/fa';

export default function Footer() {
  const address = 'г. Москва, Шоссе Энтузиастов 12 ст2';
  const yandexMapsUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(address)}`;
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <Container>
        <div className="py-4">
          <h6 className="text-uppercase fw-bold mb-4">CONTACT</h6>
          <p>
            <FaHome className="me-3" />
            <a href={yandexMapsUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'grey' }}>
              {address}
            </a>
          </p>
          <p>
            <FaEnvelope className="me-3" />
            <a href="mailto:info@enjoysocks.ru" style={{ textDecoration: 'none', color: 'grey' }}>
              info@enjoysocks.ru
            </a>
          </p>
          <p>
            <FaPhone className="me-3" />
            <a href="tel:+79996663636" style={{ textDecoration: 'none', color: 'grey' }}>
              +7 999 666 36 36
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
