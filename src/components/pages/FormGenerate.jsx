import React, { useState } from 'react';
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
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          {/* {allColor?.map((el, index) => ( */}
          <FormDisplay
            allColor={allColor}
            selectedImage2={selectedImage2}
            selectedImage={selectedImage}
          />
          {/* ))} */}
        </div>
        <div className="col-lg-4">
          <FormSetting
            socksColors={socksColors}
            setColor={setColor}
            handleSockColorChange={handleSockColorChange}
            handleImageClick={handleImageClick}
            handleImageClick2={handleImageClick2}
          />
        </div>
      </div>
    </div>
  );
}
