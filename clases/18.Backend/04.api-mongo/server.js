const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const MONGO_URI = "CADENA DE CONEXION MONGO";

app.use(express.urlencoded( { extended: true }));
app.use(express.json());

app.listen(3000,() => {
    console.log('SERVER ON');
    MongoClient.connect(MONGO_URI, {
        useUnifiedTopology: true, //Evitar DeprecationWarning: current Server Discovery and Monitoring engine is deprecated
        useNewUrlParser: true,
    })
        .then( (db) => {
            console.log('Conected to Database');
            db.close(); //Cerramos la conexión a la DB por seguridad.
        })
        .catch( (err) => {
            console.log(`DB Connection Error: ${err.message}`);
        });
});

