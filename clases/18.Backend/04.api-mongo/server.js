require('dotenv').config();
const express = require('express');
const { connect, betterConnect } = require('./db');
const { findAll, create } = require('./services/userServices');
//const { MongoClient } = require('mongodb');

const app = express();
const { MONGO_URI } = process.env; //Variable de entorno con datos de conexión

app.use(express.urlencoded( { extended: true }));
app.use(express.json());

//Promesas Explicitas: Then y Catch
//Promesas Implicitas: Async y Await
app.get('/users', async (req, res) => {
    try{
        const users = await findAll();
        return res.status(200).send(users);
    } catch(error) {
        return res.status(400).send(error);
    }
});

app.post('/users', async (req, res) => {
    //crear un nuevo user
    try{
        const user = await create(req.body);
        return res.status(200).send(user);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
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