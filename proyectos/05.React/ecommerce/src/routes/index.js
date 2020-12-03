import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../scenes/Home';
import Login from '../scenes/Login';
import SignUp from '../scenes/SignUp';
import Product from '../scenes/Product';

function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/product/:idProduct" component={Product} />
            </Switch>
        </Router>
    )
}

export default Routes;