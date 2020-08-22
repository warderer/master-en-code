(() => {
    "use strict"

    console.log(datos);
    // [{...},{...},{...}] ----> Arreglo de objetos

    console.log(datos[144]); //----> Seleccionar un pais del Arreglo

    //1.- Escoger tres paises de manera aletatoria
    //console.log(Math.floor(Math.random() * 250)) // 0 - 249
    //ceil ---> redondea hacia arriba
    //flow ---> redondecia hacia abajo

    function obtenerPais(){
        var random = Math.floor(Math.random()*datos.length);
        console.log("Num Pais: ", random);
        return datos[random];
    }
    console.log(obtenerPais());

    //2.- Crear una lista de paises, escogiendo solo 3 del universo disponible en data.js
    var paises = [];

    for (var index = 0; index < 3; index++) {
        var pais = obtenerPais();
        paises.push(pais);
    }
    console.log(paises);

    //3.- Almacenar en una variable Banderas el elemento del DOM en el HTML que contiene las banderas
    var banderas = document.querySelector('.flags');
    banderas.innerHTML = ''; //Esto va a borrar el contenido de flags.

    //5.- Escoger 1 pais al azar entre el arreglo de 3 paises seleccionados previamente para que sea el correcto
    var paisCorrecto = paises[Math.floor(Math.random() * paises.length )];
    console.log('Pais Correcto: ',paisCorrecto);

    //6.- Borrar el texto por default y poner el de mi pais correcto
    var textoPais = document.getElementById('country-name');
    textoPais.innerHTML = paisCorrecto.translations.es;

    //8.- Borrar los datos por default en answer, population y capital
    var respuesta = document.getElementById('answer');
    var poblacion = document.getElementById('population');
    var capital = document.getElementById('capital');
    respuesta.innerHTML = '';
    poblacion.innerHTML = '';
    capital.innerHTML = '';


    //4.- Recorrer los Paises para crear las banderas
    for (var index = 0; index < paises.length; index++) {
        var img = document.createElement('img'); //crea una etiqueta img
        img.setAttribute('src',paises[index].flag); //Le agrega un atributo a la etiqueta
        img.setAttribute('id',paises[index].name); //Se le agrega un ID para diferenciar una imagen de otra
    //.-7 Se anexa un event listener a cada bandera independiente para que pueda responder la bandera ante un click
        img.addEventListener('click', function(evento){
            //console.log(paises[index].name) //No se puede acceder, por asincronicidad.
            //console.log(evento); Inspecciono la información del evento 
            //console.log(evento.target); Puedo ver quien invoco (etiqueta) el evento
            //console.log(evento.target.id); Escogo la etiqueta ID (que tiene el nombre) de quien invoco la función, para saber el nombre del pais
    //9. Comprar el nombre del pais correcto con el id del pais que se hizo clic
            if(paisCorrecto.name === evento.target.id){
                respuesta.innerHTML = "¡Correcto!";
                poblacion.innerHTML = "Población: " + paisCorrecto.population;
                capital.innerHTML = "Capital: " + paisCorrecto.capital;
            } else {
                respuesta.innerHTML = "¡Incorrecto!";
                poblacion.innerHTML = "";
                capital.innerHTML = "";
            }
        })
        banderas.appendChild(img); //Anexamos la etiqueta img a banderas (que selecciono .flags)
    }


})();