(function () {
    "use strict";

// Un arreglo es una lista de cosas

    var listaFrutas = ["Mango","Manzana","Pera","Durazno","Fresa"];

    var listaDeSuper = ["Huevo","Leche","Papel Higiénico","Carne","Verduras"];

    var listaDeNumeros = [1,2,3,4,5,6,7,8];

    var listaVariadita = [1,true,null,"hola", [], 3.8, undefined, function(){}];

    var playlist = ["La Incondicional", "La Llorona", "El Triste"]; //declaración más explicita

    var playlist = new Array('Cumbia','17 años','Como la flor'); //Declaración más formal

    console.log("Numero de frutas: " + listaFrutas.length) // Lenght es el tamaño de mi lista

    //Las posiciones de un arreglo empiezan en 0, con [] especificamos la posición del elemento
    console.log("Elegi la fruta ", listaFrutas[1]); // Manzana
    console.log("Esta es ", listaFrutas[4]);

    listaFrutas.push('Guayaba'); //Agrega el elemento al final de la vista.
    console.log("Nueva lista: ", listaFrutas);
    
    listaFrutas[1] = "Toronja" // Cambiamos el valor de un elemento en la posición indicada
    console.log(listaFrutas);

    //SPLICE: Para sustituir/borrar elenmentos a partir de una posición de inicio.
    listaFrutas.splice(1,0,"Higo"); // 1 --> Donde empiezo,  0 --> Cuantos borro(ninguno), "Higo" --> Que meto al arreglo


    /* OBJETOS */
    var sensei = { //Objeto que describe a un sensei
        nombre:"Raul Dagorik",
        edad: 26,
        aniosExp: 5,
        habilidades:["Briago","Chido","Bailarin"]
    };

    var alumno = {
        nombre:"Mario",
        edad:25,
        cinta:"Master",
        ciudad:"Cancun",
        estudios: {
            universidad:"UNAM",
            prepa:"Bachillerato"
        }
    };

    console.log("El nombre del sensei es: " + sensei.nombre);
    console.log("La edad del sensei es: " + sensei.edad);
    console.log("El nombre de alumno es: " + alumno.nombre);
    console.log("El trabajo del alumno es: " + alumno.trabajo); //undefined
    alumno.trabajo = "Web ninja developer";
    console.log("El trabajo del alumno es: " + alumno.trabajo);
    console.log(alumno);
    console.log(sensei.habilidades[2]);
    console.log("La Universidad del Alumno " + alumno.estudios.universidad);

    //Ejemplo canciones
    var cancion1 = {
        titulo: "El triste",
        autor: "Roberto Cantoral",
        duracion: 3
    };

    var cancion2 = {
        titulo: "Como la Flor",
        autor: "Selena Quintanilla",
        duracion: 2.5
    };

    var playlist = [cancion1,cancion2]; //Arreglo de objetos

    console.log("Reproduciendo: " +playlist[0].titulo);


    /* CONTACTOS */

    var contacto1 = {
        nombre:"Raul Amador",
        email:"dagorik@dago.com",
        telefono:"55182929",
        tipo:2
    };

    var contacto2 = {
        nombre:"Mario Rodriguez",
        email:"mario@gmail.com",
        telefono:"5518239299",
        tipo:1
    };

    var contacto3 = {
        nombre:"Melania Tapia",
        email:"melania@gmail.com",
        telefono:"5518292449",
        tipo:1
    };

    var listaDeContactos = [contacto1,contacto2,contacto3];

    var table = document.querySelector('.table');

/*
    for (var i=0; i < listaDeContactos.length; i++ ){
        var row = document.createElement('div');
        row.classList.add('row');
        row.innerHTML = '<div class="column">' + listaDeContactos[i].nombre + '</div>'
        + '<div class="column">' + listaDeContactos[i].email + '</div>'
        + '<div class="column">' + listaDeContactos[i].telefono + '</div>'
        + '<div class="column">' + listaDeContactos[i].tipo + '</div>' ;
        table.appendChild(row);
    }
*/

function agregarNodo(contacto){
    var row = document.createElement('div');
    if (contacto.tipo === 1){
        var tipo = "Trabajo";
    } else {
        var tipo = "Personal";
    }

    row.classList.add('row');
    row.innerHTML = '<div class="column">' + listaDeContactos[i].nombre + '</div>'
    + '<div class="column">' + listaDeContactos[i].email + '</div>'
    + '<div class="column">' + listaDeContactos[i].telefono + '</div>'
    + '<div class="column">' + tipo + '</div>' ;
    table.appendChild(row);    
}

for (var i=0; i < listaDeContactos.length; i++){
    console.log('------Posicion: ' + i);
    agregaNodo(listaDeContactos[i]);
}

})(); //IIFE