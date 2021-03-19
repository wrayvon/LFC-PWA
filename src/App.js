import React from 'react';
import ynwa from './ynwa.mp3';
import './App.css';
const audio = new Audio(ynwa);

const playSound = () => {
  audio.play();
};
const pauseSound = () => {
  audio.pause();
};

const template = (
  <div className='App'>
    <header className='App-header'>
      <h1>YNWA</h1>
    </header>
    <main>
      <img src='/images/lfc.jpeg' alt='LFC' />

      <button type='button' onClick={playSound}>
        Play
      </button>
      <button type='button' onClick={pauseSound}>
        Pause
      </button>
    </main>
  </div>
);

function App() {
  return template;
}

export default App;
