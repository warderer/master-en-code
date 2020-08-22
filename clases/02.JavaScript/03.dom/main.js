(function(){
    'use strict'; //modo estricto de javascript, ayuda a detectar posibles errores
    // Si declaro despedida = "adios"; sin decir que es var, marcara un error en consola si tenemos el 'use strict';
    var despedida = 'adios';

    var nombre = document.getElementById('nombre'); //Voy a buscar por ID de una etiqueta
    console.log(nombre);
    var email = document.getElementById('email');
    console.log(email);
    var tel = document.getElementById('tel');
    console.log(tel);
    var tipo = document.getElementById('tipo');
    console.log(tipo);

    var guardar = document.getElementById('guardar');
    console.log(guardar);

    function validarForm(nombre,email,tel,tipo){
        // Si todos los campos estan completos regreso un true;
        // en caso contrario regreso un false
        if (nombre !== "" && email !== "" && tel !== "" && tipo !== "0"){
            return true;
        } else {
            return false;
        }
    }

    function clickGuardar(){
        console.log("Clic desde la función con nombre");
        console.log(validarForm(nombre.value,email.value,tel.value,tipo.value));
        if (validarForm(nombre.value,email.value,tel.value,tipo.value)) {
            //aca agrego un nuevo row a la tabla
            var tabla = document.querySelector('.table'); //va a buscar un tag de html con la clase table
            console.log(tabla);
            var row = document.createElement('div'); //crea una etiqueta div sencilla
            console.log(row);
            row.classList.add('row'); //Agrega una clase a mi Elemento HTML
            row.innerHTML = '<div class="column">' + nombre.value + '</div>'
            + '<div class="column">' + email.value + '</div>'
            + '<div class="column">' + tel.value + '</div>'
            + '<div class="column">' + tipo.value + '</div>' ;
            console.log(row);
            tabla.appendChild(row) // Agrega un hijo(nodo) de HTML a un padre (otro nodo)
        } else {
            alert('Favor de llenar todos los datos');
        }
        console.log('Nombre: ', nombre.value);
        console.log('Email: ' + email.value);
        console.log('Telefono: ' + tel.value);
        console.log('Telefono: ' + tipo.value);
    }

    guardar.addEventListener('click',clickGuardar);

/* Con Funcion Anonima
    guardar.addEventListener('click', function(){
        console.log('Le di click')
    }
    );
*/    

})(); // IIFE Immediatal Invoked Function Expressions
// Proteje mis variables desde la consola del navegador