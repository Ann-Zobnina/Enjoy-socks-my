import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormDisplay from '../ui/FormDisplay';
import FormSetting from '../ui/FormSetting';

export default function FormGenerate({ socksColors }) {
  const [allColor, setColor] = useState(socksColors);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleImageClick2 = (imageSrc2) => {
    setSelectedImage2(imageSrc2);
  };

  const handleSockColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <Container className="py-5">
      <Row>
        <Col lg={8}>
          <FormDisplay
            allColor={allColor}
            selectedImage2={selectedImage2}
            selectedImage={selectedImage}
          />
        </Col>
        <Col lg={4}>
          <FormSetting
            socksColors={socksColors}
            setColor={setColor}
            handleSockColorChange={handleSockColorChange}
            handleImageClick={handleImageClick}
            handleImageClick2={handleImageClick2}
          />
        </Col>
      </Row>
    </Container>
  );
}
