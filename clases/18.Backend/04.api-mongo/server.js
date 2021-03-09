require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const { MONGO_URI } = process.env; //Variable de entorno con datos de conexión

app.use(express.urlencoded( { extended: true }));
app.use(express.json());

app.get('/users', (req, res) => {
    //crear un nuevo user
    MongoClient.connect(MONGO_URI, {
        useUnifiedTopology: true, //Evitar DeprecationWarning: current Server Discovery and Monitoring engine is deprecated
        useNewUrlParser: true,
    })
    .then( (db) => {
        console.log('Conected to Database');
        const database = db.db('apimongo');
        const collection = database.collection('users');
        collection.find({}).toArray(function(error, results){
            res.status(200).send(results);
            db.close(); //Cerramos la conexión a la DB por seguridad.
        })
    })
    .catch( (err) => {
        console.log(`DB Connection Error: ${err.message}`);
    });
});

app.post('/users', (req, res) => {
    //crear un nuevo user
    MongoClient.connect(MONGO_URI, {
        useUnifiedTopology: true, //Evitar DeprecationWarning: current Server Discovery and Monitoring engine is deprecated
        useNewUrlParser: true,
    })
    .then( (db) => {
        console.log('Conected to Database');
        const database = db.db('apimongo');
        const collection = database.collection('users');
        collection.insertOne(req.body, function(err,user){
            if(err) throw err;
            res.status(201).send(user);
            db.close(); //Cerramos la conexión a la DB por seguridad.
        });
    })
    .catch( (err) => {
        console.log(`DB Connection Error: ${err.message}`);
    });
});

app.listen(3000,() => {
    console.log('SERVER ON');

});

