import React from 'react';

import './App.css';
import Emoji from './components/Emoji/Emoji';
import emojis from './data/index.json';

function App() {


  const myEmoji = emojis['Animals & Nature'][1].emoji;
  
  return (
    <div className="App">
      <h1>Emoji Dice</h1>
      <Emoji emoji={myEmoji}/>
    </div>
  );
}

export default App;
