import React, { useEffect } from 'react';
import Squares from '../components/squares/Squares';
import './App.css';



function App() {

  useEffect(() => {
    // const socket = openSocket('http://localhost:8080/');
    // socket.on('coord', (data: any) => {
    //   if (data.action === 'post') {
    //     setX(data.coord.x)
    //   }
    // })
  }, []);

  return (
    <div className="App">
      <h1>Let's play Vingo!</h1>
      <Squares />
    </div>
  );
}

export default App;
