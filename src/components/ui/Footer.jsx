import React from 'react';

export default function Footer() {
  return (
    <div>
      <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
      <p>
        <i className="fas fa-home me-3" />
        {' '}
        г. Москва, Шоссе Энтузиастов 12 ст2
      </p>
      <p>
        <i className="fas fa-envelope me-3" />
        info@enjoysocks.ru
      </p>
      <p>
        <i className="fas fa-phone me-3" />
        {' '}
        +7 999 666 36 36
      </p>

    </div>
  );
}
