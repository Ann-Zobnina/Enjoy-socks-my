// import React from 'react';
// import Svg from './Svg';

// export default function FormDisplay({ allColor, selectedImage }) {
//   return (
//     <>
//       <div className="card card-content">
//         <div className="imgTshirt text-center">
//           <Svg setColor={allColor} />
//         </div>
//       </div>
//       <div className="card card-content">
//         <div className="imgTshirt text-center">
//           {selectedImage && (
//             <img
//               src={selectedImage}
//               alt="Selected"
//               width="30"
//               height="30"
//               style={{ position: 'absolute', top: '100px', left: '50px' }}
//             />
//           )}
//           <img src="img/img.jpg" width="500" height="500" alt="green-cubes" />
//         </div>
//       </div>
//     </>
//   );
// }

import React from 'react';
import Svg from './Svg';

export default function FormDisplay({ allColor, selectedImage }) {
  const generateRandomCoordinates = () => {
    const coordinates = {
      top: `${Math.floor(Math.random() * 220)}px`, // Уменьшаем диапазон для вертикальной координаты
      left: `${Math.floor(Math.random() * 220)}px`, // Уменьшаем диапазон для горизонтальной координаты
    };
    return coordinates;
  };

  // Генерация множества маленьких изображений
  const generateRandomImages = () => {
    const randomImages = [];
    for (let i = 0; i < 10; i++) {
      // Создаем 10 изображений с случайными координатами
      randomImages.push(
        <img
          key={i}
          src={selectedImage} // Используем выбранное изображение или его альтернативу
          alt={i}
          width="25"
          height="25"
          style={{
            position: 'absolute',
            ...generateRandomCoordinates(), // Добавляем случайные координаты
          }}
        />,
      );
    }
    return randomImages;
  };

  return (
    <>
      <div className="card card-content">
        <div className="imgTshirt text-center">
          <Svg setColor={allColor} />
        </div>
      </div>
      <div className="card card-content">
        <div
          className="imgTshirt text-center"
          style={{ position: 'absolute', top: '-300px', left: '200px' }}
        >
          {generateRandomImages()}
          {selectedImage && <img src={selectedImage} alt="Selected" width="30" height="30" />}
        </div>
      </div>
    </>
  );
}