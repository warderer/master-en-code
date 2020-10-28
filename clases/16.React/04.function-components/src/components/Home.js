import React, {useState} from 'react';
/*import Counter from './Counter';*/
import FormularioContactos from './FormularioContactos';
import ListaContactos from './ListaContactos';

function Home () {

    const [contactos, setContactos] = useState([
        {name: 'Mario', lastName: 'Bros'},
        {name: 'Luigi', lastName: 'Bros'}
    ]);

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

    return (
        <div>
            {/*<Counter />*/}
            <FormularioContactos agregarContacto={addContacto}/>
            <ListaContactos lista={contactos}/>
        </div>
    )
}

export default Home
