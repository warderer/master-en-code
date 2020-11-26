// EJERCICIO
// Hacer nuevamente la lista de contactos pero ahora con autores consumiendo la api de https://goodreads-devf-aaron.herokuapp.com/docs/
// Usar axios
// Al abrir la pagina debe de cargar todos los autores
// Tener hasta arriba un formulario para crear autores (POST)
// Cuando se cree un nuevo autor SIN RECARGAR se tiene que poder ver el nuevo author (no importa la posición)
import React, {useEffect, useState} from 'react';
import ListaContactos from './ListaContactos';
import FormularioContactos from './FormularioContactos';
import axios from 'axios';

function HomeAPI(){

    const [contactos, setContactos] = useState([]);
    const apiUri = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

    const getApiData = () => {
        axios.get(apiUri)
        .then((result) => {
            const contactos = result.data.map((entry, index)=>{
                return {id: index, name: entry.name, lastName: entry.last_name}
            })
            setContactos(contactos);
            console.log(contactos);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(()=>{
        console.log("Ejecución de Use Effect");
        getApiData();
    },[]);

    const addContacto = (name, lastName) => {
        const persona = {
            name: name,
            last_name: lastName,
            nacionalidad: "MX",
            biography: "Ninguna",
            gender: "M",
            age: 30
        }

        axios.post(apiUri, persona)
        .then((res) => {
            console.log('subi a la api',res);
            getApiData();
        })
        .catch(err => console.log(err));
    }

    return(
        <div>
            <FormularioContactos agregarContacto={addContacto}/>
            {contactos.length === 0 ? <h2>Cargando Contactos</h2> : <ListaContactos lista={contactos}/>}
        </div>
    )
}

export default HomeAPI;
