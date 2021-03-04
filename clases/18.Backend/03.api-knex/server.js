require('dotenv').config(); //Cargar todas las variables de entorno
const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// AQUÍ DEBERIAN IR LAS RUTAS
app.use('/api/v1/', routes);

app.listen(3000,() => {
    console.log('Server ON');
})