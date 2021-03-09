require('dotenv').config();
const express = require('express');
const { connect, get, betterConnect } = require('./db');
//const { MongoClient } = require('mongodb');

const app = express();
const { MONGO_URI } = process.env; //Variable de entorno con datos de conexión

app.use(express.urlencoded( { extended: true }));
app.use(express.json());

app.get('/users', (req, res) => {
    //crear un nuevo user
    const database = get().db('apimongo')
    const collection = database.collection('users');
    collection.find({}).toArray(function(error, results){
        res.status(200).send(results)
    })
});

app.post('/users', (req, res) => {
    //crear un nuevo user
    const database = get().db('apimongo');
    const collection = database.collection('users');
    collection.insertOne(req.body, function(err, result){
        if(err) throw err;
        const [ user ] = result.ops;
        res.status(201).send(user);
    });
});

// Solo se enciende el servidor si se puede conectar a la base de datos
betterConnect(MONGO_URI, function(error){
    if(error){
        console.log("Unable to connect to Mongo");
        process.exit(1); // Termina con el server
    } else {
        //console.log('Conected to Database')
        app.listen(3000,() => {
            console.log('SERVER ON');
        });
    }
});