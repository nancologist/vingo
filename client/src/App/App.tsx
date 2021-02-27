import { Fragment, useState, MouseEvent, useEffect } from 'react';
import AppForm from '../components/AppForm/AppForm';
import Squares from '../components/squares/Squares';
import Modal from '../components/Modal/Modal';

import { celebrationColors } from './data';
import './App.css';
import PlayerName from '../components/PlayerName/PlayerName';
import { socket } from '../socket/socket';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [intervalIds, setIntervalIds] = useState([] as NodeJS.Timeout[])
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    socket.on('OPP_NAME', (name: string) => {
      if (name !== '') {
        sessionStorage.setItem('oppName', name);
      }
    })
  }, [])

  const startGame = () => {
    setGameStarted(true);
  }

  const celebrate = () => {
    setModalOpen(true);
    celebrationColors.forEach((color, i) => {
      const id = setInterval(() => {
        document.body.style.backgroundColor = color;
      }, 300 * (i + 1));
      setIntervalIds((prev: NodeJS.Timeout[]) => [ ...prev, id ]);
    })
  };

  const closeModal = (event: MouseEvent<HTMLDivElement>) => {
    setModalOpen(false);

    // Stop Animation:
    intervalIds.forEach(id => { clearInterval(id) });
    document.body.style.backgroundColor = '#eee';
  };

  let content = <AppForm submitted={startGame} />
  if (gameStarted) {
    content = 
      <Fragment>
        <Squares haveWinner={celebrate}/>
        <PlayerName />
      </Fragment>
  }

  return (
    <Fragment>
      <div className="App" >
        <h1 className="app__title">Vingo!</h1>
        { content }
      </div>
      { modalOpen ? <Modal text={'YOU WIN!'} clicked={closeModal} /> : null }
    </Fragment>
  );
}

export default App;
