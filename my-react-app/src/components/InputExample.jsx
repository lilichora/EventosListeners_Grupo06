import React, { useEffect, useState } from 'react';

const TimerEventExample = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearInterval(timer);
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <div>
      <h2>Temporizador</h2>
      <p>Tiempo transcurrido: {seconds} segundos</p>
    </div>
  );
};

export default TimerEventExample;
