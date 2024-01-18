import React, { useState } from 'react';

const InputHandler = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log('Valor actualizado:', event.target.value);
  };

  return (
    <div>
      <h2>Componente de Cambio en el Campo de Entrada</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Escribe algo..."
      />
      {inputValue && <p>Texto ingresado: {inputValue}</p>}
    </div>
  );
};

export default InputHandler;
