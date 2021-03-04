require('dotenv').config(); //Cargar todas las variables de entorno
const express = require('express');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// AQUÍ DEBERIAN IR LAS RUTAS
app.use('/api/v1/', routes);

// Escuchar los errores de JOI, siempre colocar antes de app.listen, el orden si importa.
app.use(errors());

app.listen(3000,() => {
    console.log('Server ON');
})