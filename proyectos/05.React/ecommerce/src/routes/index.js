import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Login, SignUp, Product, Error404 } from '../scenes';
import { ProductsContext } from '../context';
import NavigationBar from '../components/NavigationBar'

function Routes(){
    return(
        <Router>
            <ProductsContext.ProductsProvider>
                <NavigationBar />
            </ProductsContext.ProductsProvider>
            <Switch>
                <Route exact path="/" >
                    <ProductsContext.ProductsProvider>
                        <Home />
                    </ProductsContext.ProductsProvider>
                </Route>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/product/:idProduct" component={Product} />
                <Route component={Error404} />
            </Switch>
        </Router>
    )
}

export default Routes;