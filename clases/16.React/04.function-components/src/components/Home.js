import React, {useState} from 'react';
/*import Counter from './Counter';*/
import FormularioContactos from './FormularioContactos';
import ListaContactos from './ListaContactos';

function Home () {

    const [contactos, setContactos] = useState([
        {name: 'Mario', lastName: 'Bros'},
        {name: 'Luigi', lastName: 'Bros'}
    ]);

    return (
        <div>
            {/*<Counter />*/}
            <FormularioContactos />
            <ListaContactos lista={contactos}/>
        </div>
    )
}

export default Home
