import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Login, SignUp, Product } from '../scenes';
import NavigationBar from '../components/NavigationBar'

function Routes(){
    return(
        <Router>
            <NavigationBar />
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