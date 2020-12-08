import './App.css';
import SongList from './SongList';
import SongDetails from './SongDetails';

function App() {
  return (
    <div className="App">
        <div className="izquierdo">
          <h2>Lado Izquierdo</h2>
          <SongList />
        </div>
        <div className="derecho">
          <h2>Lado derecho</h2>
          <SongDetails />
        </div>
    </div>



  );
}

export default App;
