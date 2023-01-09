import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

import sound from './farm.mp3';
function App() {
  const audio = new Audio(sound);
  function playAudio() {
    audio.play();
  }
  return (
    <div className="App">
      <Header />
      <button onClick={playAudio}>PLAY</button>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
