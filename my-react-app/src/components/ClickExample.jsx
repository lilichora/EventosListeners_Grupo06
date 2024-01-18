import React from 'react';

const ClickExample = () => {
  const handleClick = () => {
    alert('¡Botón clickeado!');
  };

  return (
    <button onClick={handleClick}>
      Clickea aquí
    </button>
  );
};

export default ClickExample;