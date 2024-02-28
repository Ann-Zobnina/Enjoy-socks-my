import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Favorite() {
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };
  return (
    <div>
      <button onClick={toggleFavorite}>
        <FaHeart color={isFavorite ? 'red' : 'gray'} />
      </button>
    </div>
  );
}
