import React from 'react';
import './App.css';
import { texts } from '../data/data';
import Square from '../components/square/Square';

function App() {
  return (
    <div className="App">
      <div className="squares">
        {texts.map((text) => {
          return <Square text={text} />;
        })}
      </div>
    </div>
  );
}

export default App;
