import { Fragment, useEffect, useState } from 'react';
import AppForm from '../components/AppForm/AppForm';
import Squares from '../components/squares/Squares';
import { socket } from '../socket/socket';
import './App.css';



function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [oppName, setOppName] = useState('')

  useEffect(() => {
    socket.on('OPP_NAME', (name: string) => {
      setOppName(name);
    })
  }, []);

  const startGame = () => {
    setGameStarted(true);
  }

  let content = <AppForm submitted={startGame} />
  if (gameStarted) {
    content = 
      <Fragment>
        <Squares />
        <h3>You vs {
          oppName ? oppName:
          <span style={{ color: '#888'}}>waiting...</span>
        }</h3>
      </Fragment>
  }

  return (
    <div className="App">
      <h1>Vingo!</h1>
      { content }
    </div>
  );
}

export default App;
