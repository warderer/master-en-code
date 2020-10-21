import React from 'react';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';

function App() {
  //JSX: HTML + JavaScript
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter initCount={7}/>
      </header>
    </div>
  );
}

export default App;
