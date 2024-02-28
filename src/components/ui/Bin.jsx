import React, { useState } from 'react';

export default function Bin({ userId, sockId }) {
  const [isBin, setIsBin] = useState(false);
  const toggleBin = () => {
    setIsBin((prevIsBin) => !prevIsBin);
  };
  return (
    <div>Bin</div>
  );
}
