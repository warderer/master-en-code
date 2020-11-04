import React from 'react'
//para obtener el parametro usamos useParams
import {useParams} from 'react-router-dom';

function Individual(){
    const params = useParams();
    console.log(params);
return (<h1> {`Este es un componente individual para el author: ${params.idAuthor}`}</h1>)
};

export default Individual