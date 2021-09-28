import './App.css';
import { useState } from 'react'

import Intro from './components/Intro';
import Table from './components/Table';

function App() {

  const [players, setPlayers] = useState([])

  return (
    <div className="container w-full h-screen m-auto px-5 justify-center align-middle flex">
      {players.length > 0 ? <Table players={players} setPlayers={setPlayers}></Table> : <Intro setPlayers={setPlayers}></Intro>}
    </div>

  );
}

export default App;
