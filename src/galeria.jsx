import React, { useState } from 'react';
import './App.css';

function App() {
  const [meuEstado, atualizarMeuEstado] = useState(0);

  const atualizarEstado = () => {
    atualizarMeuEstado(meuEstado + 1);
  };

  return (
    <div>
      <h1> O resultado é = {meuEstado} </h1>
      <button onClick={atualizarEstado}>Contagem</button>
    </div>
  );
}

export default App;
