import React, {useEffect, useState} from 'react';
/*import Counter from './Counter';*/
import FormularioContactos from './FormularioContactos';
import ListaContactos from './ListaContactos';

function Home () {

    const [contactos, setContactos] = useState([]);

    const addContacto = (name, lastName) => {
        console.log('El contacto que vamos a agregar es',name,lastName);
        //1.- Crear el objeto contacto
        const objContacto = {
            id: contactos.length + 1,
            name: name,
            lastName: lastName,
        }
        //2.- Se actualiza el estado con la nuevo arreglo de objetos
        setContactos([...contactos, objContacto]);
    }

    // useEffect funciona como didMount, se ejecuta al final.
    // Pide 2 parametros: 1) Callback, 2) Array.
    useEffect(()=> {
        // Adentro del callback es DidMount()
        // Aquí se deben realizar las llamadas a API
        // Si se le pasa el array como segundo parametro, solo se ejecuta una vez. Si no  cada vez que se cambie el estado.
        console.log("Se ejecuto useEffect");
        setTimeout(()=>{
            setContactos([{id: 1, name: 'Edwin'}, {id: 2, name: 'Ludwin'}])
        }, 3000);
    },[]);

    return (
        <div>
            {/*<Counter />*/}
            <FormularioContactos agregarContacto={addContacto}/>
            {contactos.length === 0 ? <h2>Cargando Contactos</h2> : <ListaContactos lista={contactos}/>}
        </div>
    )
}

export default Home
