import React, {useState, useEffect} from 'react';
import canciones from './listaCanciones.json';

// Creación del contexto vacio.
const SongContext = React.createContext();


// Context necesita 2 cosas para funcionar:
// El proveedor de datos
// El consumidor de datos

// Creación de proveedor del contexto
function SongProvider(props){
    const[list, setList] = useState([]);
    const [selectedSong, setSelectedSong] = useState({});

    useEffect(()=>{
        setTimeout(()=>{
            setList(canciones);
        },2000)
    },[])

    const deleteSong = (title) => {
        const newList = list.filter((song) => song.title !== title);
        setList(newList);
        setSelectedSong({});
    }
    // Tenemos que indicar al Provider que datos debe Proveer.
    const value = {
        list, // dato publico para todos los componentes.
        deleteSong,
        selectedSong,
        setSelectedSong
    }

    return (
        // Siempre se llama Value el provider, es un objeto que indica que datos son globales.
        <SongContext.Provider value={value} {...props}/>
    )
}

// Consumidor del contexto
const useSongContext = () => {
    const context = React.useContext(SongContext);
    return context;
}

export {
    SongProvider,
    useSongContext,
}