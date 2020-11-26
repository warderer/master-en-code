import React from 'react';
import { Redirect } from 'react-router-dom';

function HOC (Component){
    const token = window.localStorage.getItem('token');
    
    // return function (props) {
    //     return(
    //         token ? <Component {...props} /> : <Redirect to="/" />
    //     )
    // }

    // La función de arriba marcaba error con ESLint, se corrigio con esta otra:
    const WrappedComponent = (props) => {
        return token ? <Component {...props} /> : <Redirect to="/" />
    }

    return WrappedComponent

}

export default HOC;