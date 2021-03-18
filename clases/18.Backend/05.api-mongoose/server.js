require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Users = require('./Users');
//const storage = require('./utils/storage');
const manageFiles = require('./middlewares/manageFiles');

const app = express();
const { MONGO_URI } = process.env; //Variable de entorno con datos de conexión

// Defino si la imagen se guardara en carpeta local o en firebase dependiendo el entorno en que se ejecute la app
const storage = process.env.NODE_ENV === "production"
? multer.memoryStorage()
: multer.diskStorage({
        destination: function(req,file,cb){
            cb(null, 'uploads')
        },
        filename: function(req,file,cb){
            cb(null, `${Date.now()}_${file.originalname}`)
        }
});

const mult = multer ({
    storage, //Mientras se van subiendo los pedazos, guardalo en memoria RAM.
    limits: {
        filezie: 5 * 1024 * 1024 // Limite de 5 MB
    }
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('uploads', express.static('uploads')); //exponemos el directorio de uploads para que el contenido sea accesible por las rutas

// ESTA ES LA CONEXIÓN A MONGO
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true, //Para usar la URL nueva de conexión
    useUnifiedTopology: true, // Soporte para multiples versiones de mongo
    useCreateIndex: true,
}); // inicia la conexión
const db = mongoose.connection; // aquí esta guardada el estatus de la conexión

db.on('error', function(err){ // Se ejecuta cada vez que hay un error en la conexión
    console.log('Connection error', err);
});

db.once('open', function(){ // Se ejecuta una vez y solo cuando se completo la conexión
    console.log('Conected to database!!!!!');
});

app.get('/users', (req,res) => {
    Users.find({}).then((result) => { //mongoose regresa una promesa y lo trae en arreglo
        res.status(200).send(result)
    });
});

app.post('/users',[mult.single('photo'), manageFiles], async (req,res) => { //Indicamos con el middleware de multer cual es el campo del archivo
    // Esto se movio al middleware manageFiles.js
    // if(req.file) { //req.file es el archivo "photo" procesado por multer
    //     try {
    //         const url = await storage(req.file); //aqui subo mi archivo a firebase
    //         req.body.photo = url; // voy a guardar la url de la imagen en la base de datos
    //     } catch (error) {
    //         console.log({"message":error})
    //     }    
    //}
    Users.create(req.body).then((user) => {
        res.status(201).send(user);
    }).catch((error) => {
        res.status(400).send(error);
    })
});

app.listen(3000,() => {
    console.log('SERVER ON');
});