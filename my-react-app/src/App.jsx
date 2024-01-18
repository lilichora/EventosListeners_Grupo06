// src/App.jsx

import ExampleClic from "./components/ExampleClic";
import InputExample from "./components/InputExample";

function App() {
  return (

    <div>
      <h1>Ejemplos de Eventos en React</h1>
      <h2>Evento de Cambio de Estado al Pasar el Ratón:</h2>
      <ExampleClic/>
      <h2>Evento de Temporizador con useEffect::</h2>
      <InputExample />
    </div>
  );
}

export default App;