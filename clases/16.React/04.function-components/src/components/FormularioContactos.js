import React from 'react'

function FormularioContactos() {
    return (
        <div>
            <form>
                <input required placeholder="Nombre"/>
                <input required placeholder="Apellidos"/>
                <button type="submit">Agregar</button>
            </form>
        </div>
    )
}

export default FormularioContactos;
