import React, {useState, useEffect} from 'react';
import canciones from './listaCanciones.json';

const SongContext = React.createContext();

//Context necesita 2 cosas para funcionar:
//EL proveedor de datos
//El consumidor de datos

function SongProvider(props){
    const[list, setList] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            setList(canciones);
        },2000)
    },[])

    //Tenemos que indicar al Provider que datos debe Proveer.
    const value = {
        list //dato publico para todos los componentes.
    }

    return (
        // Siempre se llama Value el provider, es un objeto que indica que datos son globales.
        <SongContext.Provider value={value} {...props}/>
    )
}

export {
    SongProvider
}