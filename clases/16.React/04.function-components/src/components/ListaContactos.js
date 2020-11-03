import React from 'react';
import PropTypes from 'prop-types';

function ListaContactos({lista}){
    const renderContactos = () => {
        return (lista.map((contacto,index)=> <p key={index}>{contacto.name} {contacto.lastName}</p>))
        // [<h1>Mario</h1>, <h1>Luigi</h1>]
    }

    return (
        <div>
            <h1>Esta es la lista de contactos</h1>
            {renderContactos()}
        </div>
    )
}

ListaContactos.propTypes = {
    lista: PropTypes.array
}

export default ListaContactos;


// Hacer un function component con un pequeño formulario solo el maqueado para agregar un conatcto
//Y mandarlo a llamar  en el Home


