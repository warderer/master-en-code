import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import Quote from './views/Quote';

function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/signup" exact component={Signup}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/quote" exact component={Quote}></Route>
            </Switch>
        </Router>
    )
}

export default Routes;
