import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormDisplay from '../ui/FormDisplay';
import FormSetting from '../ui/FormSetting';

export default function FormGenerate({
  socksColors, socksDecor, images, user,
}) {
  const [allColor, setColor] = useState(socksColors[0].color);
  const [selectedDecor, setSelectedDecor] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  // console.log(user.role, 'user');

  const handleDecorClick = (imageSrc) => {
    setSelectedDecor(imageSrc);
  };

  const handleImageClick2 = (imageSrc2) => {
    setSelectedImage2(imageSrc2);
  };

  const deleteImage = () => {
    setSelectedDecor(null);
  };

  const deleteDecor = () => {
    setSelectedImage2(null);
  };

  const deleteColor = () => {
    setColor(null);
  };

  const handleReset = () => {
    setColor(socksColors[0].color);
    setSelectedDecor(null);
    setSelectedImage2(null);
  };
  return (
    <Container className="py-5">
      <Row>
        <Col lg={6}>
          <FormDisplay
            allColor={allColor}
            selectedImage2={selectedImage2}
            selectedDecor={selectedDecor}
          />
        </Col>
        <Col lg={6}>
          <FormSetting
            socksColors={socksColors}
            setColor={setColor}
            images={images}
            user={user}
            handleReset={handleReset}
            setSelectedDecor={setSelectedDecor}
            setSelectedImage2={setSelectedImage2}
            handleDecorClick={handleDecorClick}
            handleImageClick2={handleImageClick2}
            deleteDecor={deleteDecor}
            deleteColor={deleteColor}
            deleteImage={deleteImage}
            socksDecor={socksDecor}
          />
        </Col>
      </Row>
    </Container>
  );
}
