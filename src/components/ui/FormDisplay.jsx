import React from 'react';
import { Card } from 'react-bootstrap';
import Svg from './Svg';

export default function FormDisplay({ allColor, selectedDecor, selectedImage2 }) {
  return (
    <>
      <Card
        style={{ borderBottom: 'none', backgroundColor: 'black' }}
        className="card card-content"
      >
        <Svg setColor={allColor} />
      </Card>
      <Card className="card card-content">
        {selectedDecor && (
          <img
            src={selectedDecor}
            alt="Selected"
            width="250"
            height="250"
            style={{ position: 'absolute', top: '-800px', left: '240px' }}
          />
        )}

        {selectedImage2 && (
          <img
            src={selectedImage2}
            alt="Selected"
            width="800"
            height="800"
            style={{ position: 'absolute', top: '-890px', left: '10px' }}
          />
        )}
      </Card>
    </>
  );
}
