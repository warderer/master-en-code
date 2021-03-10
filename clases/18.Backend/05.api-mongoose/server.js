require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const { MONGO_URI } = process.env; //Variable de entorno con datos de conexión

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// ESTA ES LA CONEXIÓN A MONGO
mongoose.connect(MONGO_URI); // inicia la conexión
const db = mongoose.connection; // aquí esta guardada el estatus de la conexión

db.on('error', function(err){ // Se ejecuta cada vez que hay un error en la conexión
    console.log('Connection error', err);
});

db.once('open', function(){ // Se ejecuta una vez y solo cuando se completo la conexión
    console.log('Conected to database!!');
});

app.listen(3000,() => {
    console.log('SERVER ON');
});