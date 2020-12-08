import React from 'react';
import Home from './components/Home';
import SingleShowView from './components/SingleShowView'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <Switch>

            <Route exact path="/show/:idShow">
              <SingleShowView />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;