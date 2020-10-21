import React from "react";
import logo from "./logo.svg";
import "./App.css";



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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  };
};

export default App;
