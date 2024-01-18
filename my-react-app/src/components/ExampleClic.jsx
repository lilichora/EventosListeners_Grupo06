import React, { useState } from 'react';

const MouseOverOutEventExample = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
    console.log('Mouse sobre el elemento');
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    console.log('Mouse fuera del elemento');
  };

  return (
  
    <div
    
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ backgroundColor: isHovered ? 'lightblue' : 'white' }}
    >
      Pasa el ratón sobre mí
    </div>
  );
};

export default MouseOverOutEventExample;
