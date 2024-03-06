import React from "react";
import "./App.css";
import App from './galeria'; // Importe o componente corretamente

function AppWrapper() {
  return (
    <div className="App">
      <App /> {/* Use <App /> para renderizar o componente */}
    </div>
  );
}

export default AppWrapper;