import { Fragment, useEffect, useState } from 'react';
import AppForm from '../components/AppForm/AppForm';
import Squares from '../components/squares/Squares';
import { socket } from '../socket/socket';
import { celebrationColors } from './data';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [oppName, setOppName] = useState('')

  useEffect(() => {
    const storedName = sessionStorage.getItem('oppName');
    if (!!storedName) setOppName(storedName);

    socket.on('OPP_NAME', (name: string) => {
      sessionStorage.setItem('oppName', name);
      setOppName(name);
    })
  }, []);

  const startGame = () => {
    setGameStarted(true);
  }

  const celebrate = () => {
    celebrationColors.forEach((color, i) => {
      setInterval(() => {
        document.body.style.backgroundColor = color;
      }, 300 * (i + 1));
    })
  };

  let content = <AppForm submitted={startGame} />
  if (gameStarted) {
    content = 
      <Fragment>
        <Squares haveWinner={celebrate}/>
        <h3>You vs {
          oppName ? oppName:
          <span style={{ color: '#888'}}>waiting...</span>
        }</h3>
      </Fragment>
  }

  return (
    <div className="App" >
      <h1>Vingo!</h1>
      { content }
    </div>
  );
}

export default App;
