import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function contadora(){
    setcont(cont + 1)
  }
  
  function tira(){
    setcont(cont - 1)
  }
  const [cont, setcont] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contador: {cont}
        </p>
        <button onClick={contadora}>Clique aki para somar</button>
        <button onClick={tira}>Clique aki para subtrair</button>
      </header>
    </div>
  );
}

export default App;
