import React from 'react';
import { Card } from 'react-bootstrap';
import Svg from './Svg';

export default function FormDisplay({ allColor, selectedImage, selectedImage2 }) {
  return (
    <>
      <Card style={{ borderBottom: 'none' }} className="card card-content">
        <Svg setColor={allColor} />
      </Card>
      <Card className="card card-content">
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected"
            width="290"
            height="290"
            style={{ position: 'absolute', top: '-900px', left: '250px' }}
          />
        )}

        {selectedImage2 && (
          <img
            src={selectedImage2}
            alt="Selected"
            width="682"
            height="850"
            style={{ position: 'absolute', top: '-950px', left: '200px' }}
          />
        )}
      </Card>
    </>
  );
}
