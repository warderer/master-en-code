import React from 'react'
import PropTypes from 'prop-types'

// IMPORTANDO PROPS
// function Home(props){
//     return (
//         <React.Fragment>
//             <h1>Este es el Home en Función</h1>
//             <p>{props.saludo}</p>
//         </React.Fragment>
//     );
// }

//DESESTRUCTURANDO PROPS.
// Si añado {nombreDelProp} puedo llamar especificamente a ese prop.
// Ahorrandonos escribir prop.nombreDelProp
function Home({saludo, nombre}){
    return (
        <React.Fragment>
            <h1>Este es el Home en Función</h1>
    <p>{saludo} {nombre}</p>
        </React.Fragment>
    );
}

Home.propTypes = {
    saludo: PropTypes.string,
    nombre: PropTypes.string
}

export default Home;