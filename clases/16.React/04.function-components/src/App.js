import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomeAPI from './components/HomeAPI';
import Home from './components/Home';
import About from './components/About';
import Individual from './components/Individual';


function App() {
  return (
    // Si voy  usar react-router-dom el primer componente siempre es <Router />
    // Va a permitir detectar las URLs
    <Router>
      {/* Switch me va a permitir identificar la URL y pintar el componente adecuado */}
      <Switch>
        {/* Adentro de <Switch /> siempre va <Route /> */}
        {/* Cuando entren al path "/" debe pintar el componente Home*/}

        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/author/:idAuthor">
          <Individual />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
