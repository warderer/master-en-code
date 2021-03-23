require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const UserController = require('./controllers/UsersController');
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

app.get('/users', UserController.fetch);

//Indicamos con el middleware de multer cual es el campo del archivo
app.post('/users',[mult.single('photo'), manageFiles], UserController.create);

app.get('/users/:id', UserController.findOne);

app.patch('/users/:id',[mult.single('photo'), manageFiles], UserController.update);

app.delete('/users/:id', UserController.remove);

app.listen(3000,() => {
    console.log('SERVER ON');
});