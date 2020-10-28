//Para que yo pueda usar el estado tengo que importar/usar useState
import React, { useState } from 'react'

function Counter(){
    // useState devuelve un arreglo con dos elementos [valor, funcion]
    // a useState recibe como parametro el estado/valor inicial

    // Estoy desestructurando el objeto.
    // Pos 0 --> El valor del estado (variable estadoContador)
    // Pos 1 --> Función: Es su modificador (solo de la variable)
    const [estadoContador, setEstadoContador] = useState(0);
    console.log(estadoContador);

    return(
        <div>
            <p>{estadoContador}</p>
            <button onClick={()=> {
                setEstadoContador(estadoContador + 1);
            }}>Sumar +</button>
            <button onClick={()=> setEstadoContador(estadoContador - 1)}>Restar -</button>
        </div>
    );
}

export default Counter;
