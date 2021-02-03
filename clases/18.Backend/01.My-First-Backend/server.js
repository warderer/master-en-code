const axios = require('axios');
// Este archivo va a tener las configuraciones de mi server.

// Llama la biblioteca de express (Import)
const express = require('express');

// Crear una instancia de express y llama a la 'App';
const app = express();

// Crear nuestro primer EndPoint (GET) '/'
// get() params --> 'URI', callback
// request: Todo lo que el usuario me manda (en cabeceras)
// response: Lo utilizo para responder la petición
app.get('/', (request, response) => {
    console.log('Entro a mi GET');
    //Las API suelen contestar en formato JSON
    response.send(
        '<h1>Entraste al Home</h1>' //Para fines demostrativos envio HTML
    )
});

app.get('/api/saludo', (req, res) => {
    const myJson = { // Creo mi objeto JSON
        id: 1,
        name: 'Firulais'
    }
    res.send(myJson) // Contesto la petición
});

// Obtener parametros de rutas dinámicas
// Params 'URL/api/pets/1'
// Los : en la ruta indica que es un valor dinámico (parametro)
app.get('/api/pets/:petId', (req, res) => {
    //console.log(req)
    console.log(req.params) // Ejemplo: { petId: '1' }
    const idPet = req.params.petId;
    const mensaje = { id: `El ID que buscas es: ${idPet}`};
    res.send(mensaje);
});

// Los códigos de estado son una Convención,
// por lo que no es una obligación seguir las reglas existentes
// También podemos usar lógica en la respuesta de la API.
app.get('/api/cakes/:cakeId', (req, res) => {
    const idCake = parseInt(req.params.cakeId);
    if ( idCake > 99) {
        res.status(404).send({ mensaje: 'El ID del pastel no existe' });
    } else {
        const mensaje = { id: `El ID que buscas es: ${idCake}`};
        res.send(mensaje);
    }
});

// Query
// Query 'URL/api/pets?color=blanco&comida=croquetas
// Similar a Params, pero suele incluir más de un dato
// Las Query son abiertas, no definimos cuantas variables nos tienen que enviar ni como se llaman.
// La responsabilidad del Backend es tomar solo en cuenta los adecuados.
app.get('/api/pets', (req, res) => {
    console.log(req.query); //req.query hace referencia a todas las query que me mandan
    const petsArray = [
        {   id: 1,
            name: 'Firulais'
        },
        {   id: 2,
            name: 'Moly'
        },
        {   id: 3,
            name: 'Kiara'
        }
    ];
    res.send(petsArray);
});

/* EJERCICIOS: RESPUESTAS */
// 1. - Agrega un endpoint '/api/' que responda a
// una petición de tipo GET con un código de estado 200
// y el siguiente json:
// { 'mensaje': 'hola mundo' }
app.get('/api/',(req,res)=>{
    res.send({mensaje:'hola mundo'});
});

// 2. - Agrega un endpoint '/api/suma' que responda a una
// petición de tipo GET con la suma de dos números que
// reciba mediante las querys num1 y num2.El servidor
// debe responder con un código de estado 200 y un json
// como el siguiente:
// { 'resultado': 7 }
app.get('/api/suma',(req,res)=>{
    if (req.query.num1&&req.query.num2) {
        suma = parseInt(req.query.num1) + parseInt(req.query.num2);
        res.send({resultado:suma});
    } else {
        res.status(400).send('Error: No valid values')
    }
});

// 3. - Agrega un endpoint '/api/usuario/' que responda a
// una petición de tipo GET con el nombre que sea
// recibido a través de params.El servidor debe responder
// con un código de estado 200 y un json como este:
// { 'usuario': 'Edwin' }
app.get('/api/usuario/:nombre',(req,res)=>{
    const {nombre} = req.params;
    res.status(200).send({usuario:nombre});
})

// 4. - Agrega un endpoint '/api/swapi' que responda a una
// petición de tipo GET con el personaje solicitado de
// https://swapi.dev/
// El cliente debe mandar el número de personaje mediante
// params.La respuesta del servidor debe lucir algo así
// {
//     'personaje': {
//         'name': 'Luke Skywalker',
//                         ...,
//     }
// }
app.get('/api/swapi/:idPersonaje', async (req,res)=>{
    const id = req.params.idPersonaje;
    try {
        const swapiRes = await axios.get(`https://swapi.dev/api/people/${id}`);
        res.send({personaje: swapiRes.data}); //status 200
    }
    catch(err) {
        res.status(err.response.status).json({
            error: err.message
        })
    }
});

// Levanta el servidor en un puerto y recibe un Callback
app.listen(3000, () => {
    console.log('Server ON');
})