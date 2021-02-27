import { Fragment, useEffect, useState, MouseEvent } from 'react';
import AppForm from '../components/AppForm/AppForm';
import Squares from '../components/squares/Squares';
import Modal from '../components/Modal/Modal';
import { socket } from '../socket/socket';
import { celebrationColors } from './data';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [oppName, setOppName] = useState('');
  const [intervalIds, setIntervalIds] = useState([] as NodeJS.Timeout[])
  const [modalOpen, setModalOpen] = useState(false);

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
        <h3>You vs {
          oppName ? oppName:
          <span style={{ color: '#888'}}>waiting...</span>
        }</h3>
        { modalOpen ? <Modal text={'YOU WIN!'} clicked={closeModal} /> : null }
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
