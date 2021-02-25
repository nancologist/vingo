import React from 'react';
import Squares from '../components/squares/Squares';
import './App.css';

// import openSocket from 'socket.io-client';

function App() {

  // useEffect(() => {
  //   const socket = openSocket('http://localhost:8080');
  // }, []);

  return (
    <div className="App">
      <h1>Let's play Vingo!</h1>
      <Squares />
    </div>
  );
}

export default App;
