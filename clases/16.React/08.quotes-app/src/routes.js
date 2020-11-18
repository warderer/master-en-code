import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';

function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home}></Route>
            </Switch>
        </Router>
    )
}

export default Routes;
