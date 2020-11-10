// REGLAS PARA CREAR MIS PROPIOS HOOKS
// Hooks son funciones que utilizan otras funciones para dar más funcionalidad (solo aplica en React el concepto)
// 1. Siempre llamarlo useLoQueSea, ejemplo: useForm
// 2. SIEMPRE deber ser funciones !!!!
// 3. Tienes que utilizar Hooks de React, y no deben contener loops, condiciones o funciones anidadas.
// LOS HOOKS TIENEN QUE SER UNIVERSALES

import React, { useState } from 'react'; //cumplo con 3. usar hooks de react

function useForm(callback){
    const [inputs, setInputs] = useState({}) // aqui voy a estar guardando los valores de mis formularios.
    // Al inicializarse como objeto, puede contener cualquier cantidad y tipo de datos.
    // {
    //    "nombre": "Pedro",
    //    "apellidos": "Gomez"
    //    ...
    // }

    const handleSubmit = (event) => {
        //HandleSubmit va a ser ocupada en el submit de mis forms
        event.preventDefault(); //Evita el refresh al enviar el formulario
        callback(inputs);
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        console.log(name,value);
        setInputs({...inputs, [name]:value});
    }

    return { //Los Hooks no regresan JSX, por eso no se usa (), y en vez se usa {}
        inputs,
        handleInputChange,
        handleSubmit
    }
}

export default useForm;
