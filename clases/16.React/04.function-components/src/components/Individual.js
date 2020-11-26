import React from 'react'
//para obtener el parametro usamos useParams
import {useParams} from 'react-router-dom';

function Individual(){
    const params = useParams();
    console.log(params);
return (<h1> {`Este es un componente individual para el author: ${params.idAuthor}`}</h1>)
<<<<<<< HEAD
};
=======
}
>>>>>>> 147e1f9e657104e13f3fee1f4b67822c18f20d34

export default Individual