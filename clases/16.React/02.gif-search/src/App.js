import React from "react";
import "./App.css";
import SearchBar from './components/SearchBar';
import ImageCard from './components/ImageCard';
import axios from 'axios';

class App extends React.Component {

  state = {
    results: []
  }

  sendSearch = (search) => {
    const apiKey = 'GeBHgHB4SbCMBiRBOWxdyQ9kdUpIzFoP';
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&limit=10&offset=0&rating=g&lang=es`)
    .then((response) => {
        console.log(response.data.data);
        this.setState({results: response.data.data});
    }).catch((err) => {
        console.log(err);
    });
  }

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
        <SearchBar emitSearch={this.sendSearch} />
        <div className="grid-cards">
          {
            this.state.results.map ( gif => (<ImageCard url={gif.images.fixed_width.url} />))
          }
        </div>
      </div>
    );
  };
};

export default App;
