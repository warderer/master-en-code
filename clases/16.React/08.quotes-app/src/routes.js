import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import Quote from './views/Quote';

//Devuelve un JSX para que sea un componente de React
const Logout = () => {
    window.localStorage.removeItem('token');
    return <Redirect to="/" />
}

function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/signup" component={Signup}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/quote" component={Quote}></Route>
                <Route exact path="/logout" component={Logout}></Route>
            </Switch>
        </Router>
    )
}

export default Routes;
