import React, {useState, useEffect} from 'react';

function Counter(){
    const [count, setCount] = useState(0) //Si modifico el estado, el componente se vuelve a pintar.
    const [countTwo, setCountTwo] = useState(0)
    // Side-effects ---> Efectos secundarios.
    // Son todas aquellas cosas que pueden provocar cosas inesperadas.
    // * CALL a una API
    // * Event Listeners
    // * Manejo directo del DOM
    // * setTimeout y setInterval

    useEffect(( )=> {
        // eslint-disable-next-line no-debugger
        // debugger;
        console.log(`El valor actual en count es ${count}`);
        console.log(`El valor actual en countTwo es ${countTwo}`);
    },[countTwo]) // los corchetes significan dependencias
    // Los corchetes sirven para escuchar cambios en el estado o en los props

    return(
        <div>
            <h1>El valor actual es: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Aumentar</button>
            <h1>El valor actual es: {countTwo}</h1>
            <button onClick={() => setCountTwo(countTwo + 1)}>Aumentar</button>
        </div>
            
    )

}

export default Counter;