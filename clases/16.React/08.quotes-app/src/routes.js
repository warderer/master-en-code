import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Signup from './views/Signup';

function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/signup" exact component={Signup}></Route>
            </Switch>
        </Router>
    )
}

export default Routes;
