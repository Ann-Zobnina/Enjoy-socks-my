import React, { useState } from 'react';
import FormDisplay from '../ui/FormDisplay';
import FormSetting from '../ui/FormSetting';

export default function Page({ socksColors }) {
  const [allColor, setColor] = useState(socksColors);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleSockColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          {/* {allColor?.map((el, index) => ( */}
          <FormDisplay allColor={allColor} selectedImage={selectedImage} />
          {/* ))} */}
        </div>
        <div className="col-lg-4">
          <FormSetting
            socksColors={socksColors}
            setColor={setColor}
            handleSockColorChange={handleSockColorChange}
            handleImageClick={handleImageClick}
          />
        </div>
      </div>
    </div>
  );
}
