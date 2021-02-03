// Este archivo va a tener las configuraciones de mi server.

// Llama la biblioteca de express (Import)
const express = require('express');

// Crear una instancia de express y llama a la 'App';
const app = express();

// Crear nuestro primer EndPoint (GET) '/'
// get() params --> 'URI', callback
// request: Todo lo que el usuario me manda (en cabeceras)
// response: Lo utilizo para responder la petición
app.get('/', (request, response) => {
    console.log('Entro a mi GET');
    //Las API suelen contestar en formato JSON
    response.send(
        '<h1>Entraste al Home</h1>' //Para fines demostrativos envio HTML
    )
});

// Levanta el servidor en un puerto y recibe un Callback
app.listen(3000, () => {
    console.log('Server ON');
})