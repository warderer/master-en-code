import React, { useEffect, useState } from 'react'
import './App.css';
import SongList from './SongList';
import SongDetails from './SongDetails';
import canciones from './listaCanciones.json';

function App() {
  const[list, setList] = useState([]);

  useEffect(()=>{
      setTimeout(()=>{
          setList(canciones);
      },2000)
  },[])

  return (
    <div className="App">
        <div className="izquierdo">
          <h2>Lado Izquierdo</h2>
          <SongList listaDeCanciones={list}/>
        </div>
        <div className="derecho">
          <h2>Lado derecho</h2>
          <SongDetails />
        </div>
    </div>



  );
}

export default App;
