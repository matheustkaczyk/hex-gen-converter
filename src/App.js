import React, { useContext } from 'react';
import MyContext from './context/Context';
import Canvas from './components/Canvas';
import Header from './components/Header';
import './App.css';


function App() {
  const { hexColor, rgb } = useContext(MyContext);
  return (
    <div className="App">
      { Header() }
      { Canvas(hexColor, rgb) }
    </div>
  );
}

export default App;
