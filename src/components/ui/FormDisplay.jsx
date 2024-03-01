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

        {selectedImage2 && (
          <img
            src={selectedImage2}
            alt="Selected"
            width="450"
            height="450"
            style={{
              position: 'absolute', top: '-500px', left: '0px', overflow: 'hidden',
            }}
          />
        )}
        {selectedDecor && (
        <img
          src={selectedDecor}
          alt="Selected"
          width="100"
          height="100"
          style={{ position: 'absolute', top: '-450px', left: '140px' }}
        />
        )}
      </Card>
    </>
  );
}
