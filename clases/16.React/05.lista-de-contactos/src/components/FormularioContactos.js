import React, {useState} from 'react'

function FormularioContactos({agregarContacto}) {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmitContacto = (e) => {
        e.preventDefault();
        console.log('Le dieron submit');
        agregarContacto(name,lastName);
    }

    return (
        <div>
            <form onSubmit={onSubmitContacto}>
                <input value={name} onChange={(e)=>{
                    setName(e.target.value)
                    console.log(name)}
                } required placeholder="Nombre"/>
                <input value={lastName} onChange={(e)=>{
                    setLastName(e.target.value)
                    console.log(lastName)}
                } required placeholder="Apellidos"/>
                <button type="submit">Agregar</button>
            </form>
        </div>
    )
}

export default FormularioContactos;
