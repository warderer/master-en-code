// Este archivo va a tener las configuraciones de mi server.

// Llama la biblioteca de express (Import)
const express = require('express');

// Crear una instancia de express y llama a la 'App';
const app = express();

// Levanta el servidor en un puerto y recibe un Callback
app.listen(3000, () => {
    console.log('Server ON');
})