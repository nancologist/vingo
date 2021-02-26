import { Fragment, useEffect, useState } from 'react';
import AppForm from '../components/AppForm/AppForm';
import Squares from '../components/squares/Squares';
import { socket } from '../socket/socket';
import { celebrationColors } from './data';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [oppName, setOppName] = useState('');
  const [intervalIds, setIntervalIds] = useState([] as NodeJS.Timeout[])
  // const [intervalId, setIntervalId] = useState(null as NodeJS.Timeout | null);

  useEffect(() => {
    const storedName = sessionStorage.getItem('oppName');
    if (!!storedName) setOppName(storedName);

    socket.on('OPP_NAME', (name: string) => {
      sessionStorage.setItem('oppName', name);
      setOppName(name);
    })
  }, []);

  useEffect(() => {
    document.body.addEventListener('click', (event: Event) => {
      intervalIds.forEach(id => { clearInterval(id) });
      (event.currentTarget as HTMLElement).style.backgroundColor = '#eee';
    })
  }, [intervalIds]);

  const startGame = () => {
    setGameStarted(true);
  }

  const celebrate = () => {
    celebrationColors.forEach((color, i) => {
      const id = setInterval(() => {
        document.body.style.backgroundColor = color;
      }, 300 * (i + 1));
      setIntervalIds((prev: NodeJS.Timeout[]) => [ ...prev, id ]);
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
