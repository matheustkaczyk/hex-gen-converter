import React, { useState } from 'react';
import Canvas from './components/Canvas';
import './App.css';

let randomHex = require('random-hex');

function App() {
  const [hexColor, setHexColor] = useState(false);

  const handleClick = () => {
    setHexColor(randomHex.generate());
  }

  return (
    <div className="App">
      <button onClick={() => handleClick()}>Generate</button>
      { Canvas(hexColor) }
    </div>
  );
}

export default App;
