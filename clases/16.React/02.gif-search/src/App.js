import React from "react";
import "./App.css";
import SearchBar from './components/SearchBar';
import ImageCard from './components/ImageCard';

class App extends React.Component {
  componentWillMount(){ //Metodo UnSafe. Actualmente ya no se usa.
    console.log('1. Antes de que se ejecute el render');
  };

  componentDidMount(){
    console.log('3. Después de Render');
  };

  render() {
    console.log('2. Se ejecuta al realizar el render');
    return (
      <div className="App">
        <SearchBar />
        <div className="grid-cards">
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    );
  };
};

export default App;
