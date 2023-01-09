import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  let audio = new Audio('/public/farm.mp3');
  const start = () => {
    audio.play();
  };
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <button onClick={start}>PLAY</button>
    </div>
  );
}

export default App;
