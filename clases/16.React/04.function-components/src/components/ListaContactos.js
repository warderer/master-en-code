import React, {useState} from 'react';
import FormularioContactos from './FormularioContactos'

function ListaContactos () {

    const [contactos, setContactos] = useState([
        {name: 'Mario', lastName: 'Bros'},
        {name: 'Luigi', lastName: 'Bros'}
    ]);

    const renderContactos = () => {
        return (contactos.map((contacto)=> <p>{contacto.name}</p>))
        // [<h1>Mario</h1>, <h1>Luigi</h1>]
    }

    return (
        <div>
            <h1>Esta es la lista de contactos</h1>
            <FormularioContactos />
            {renderContactos()}
        </div>
    )
}

export default ListaContactos;


// Hacer un function component con un pequeño formulario solo el maqueado para agregar un conatcto
//Y mandarlo a llamar  en el Home
