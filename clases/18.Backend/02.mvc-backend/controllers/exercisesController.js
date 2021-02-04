const axios = require('axios');

module.exports = {
    /* EJERCICIOS: RESPUESTAS */
    // 1. - Agrega un endpoint '/api/' que responda a
    // una petición de tipo GET con un código de estado 200
    // y el siguiente json:
    // { 'mensaje': 'hola mundo' }
    getHola: (req,res)=>{ // 1
        res.send({mensaje:'hola mundo'});
    },

    // 2. - Agrega un endpoint '/api/suma' que responda a una
    // petición de tipo GET con la suma de dos números que
    // reciba mediante las querys num1 y num2.El servidor
    // debe responder con un código de estado 200 y un json
    // como el siguiente:
    // { 'resultado': 7 }
    getSuma: (req,res)=>{
        if (req.query.num1&&req.query.num2) {
            suma = parseInt(req.query.num1) + parseInt(req.query.num2);
            res.send({resultado:suma});
        } else {
            res.status(400).send('Error: No valid values')
        }
    },

    // 3. - Agrega un endpoint '/api/usuario/' que responda a
    // una petición de tipo GET con el nombre que sea
    // recibido a través de params.El servidor debe responder
    // con un código de estado 200 y un json como este:
    // { 'usuario': 'Edwin' }
    getUserByName: (req,res)=> {
        const {nombre} = req.params;
        res.status(200).send({usuario:nombre});
    },

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
    getSwapiCharById: async (req,res) => {
        const id = req.params.idPersonaje;
        try {
            const swapiRes = await axios.get(`https://swapi.dev/api/people/${id}`);
            res.send({personaje: swapiRes.data}); //status 200
        }
        catch(err) {
            res.status(err.response.status).json({
                error: err.message
            });
        }
    },

    // 5. - Hacer el ejercicio 2 pero desde un post mandado num1 y num2 desde el body
    postSuma: (req, res) => {
        const {num1, num2} = req.body
        if ((typeof num1 === 'number')&&(typeof num2 === 'number')) {
            suma = parseInt(num1) + parseInt(num2);
            res.send({resultado:suma});
        } else {
            res.status(400).send('Error: No valid values')
        }
    },

    // 6. - Hacer un PUT que reciba un body y lo responda de vuelta
    putBody: (req, res) => {
        res.status(200).send(req.body);
    },

    // 7. - Hacer un delete que reciba como parametro un id (Solo es válido el id: 3, para cualquier otro id responde 404)
    deleteById: (req, res) => {
        const {id} = req.params;
        if (id == 3) {
            res.status(200).send({Mensaje: `Se ha borrado correctamente el ID: ${id}`})
        }
        else res.status(400).send({Mensaje: 'Error, se esperaba ID 3'});
    }
};