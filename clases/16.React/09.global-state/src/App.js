import React from 'react';
import { SongProvider } from './SongContext';
import './App.css';
import SongList from './SongList';
import SongDetails from './SongDetails';

function App() {

  return (
    <div className="App">
        <SongProvider>
          <div className="izquierdo">
            <h2>Lado Izquierdo</h2>
            <SongList listaDeCanciones={[]}/>
          </div>
          <div className="derecho">
            <h2>Lado derecho</h2>
            <SongDetails />
          </div>
        </SongProvider>
    </div>



  );
}

export default App;
