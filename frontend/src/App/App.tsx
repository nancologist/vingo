import React from 'react';
import './App.css';
import { texts } from '../data/data';
import Square from '../components/square/Square';

function App() {
  return (
    <div className="App">
      <h1>Let's play Vingo!</h1>
      <div className="squares">
        {texts.map((text, index) => {
          const y = Math.floor( index / 5 );
          const x = index % 5;
          return <Square text={text} x={x} y={y} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
