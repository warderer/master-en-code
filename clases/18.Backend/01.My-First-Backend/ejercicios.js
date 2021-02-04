// 1. - Agrega un endpoint '/api/' que responda a
// una petición de tipo GET con un código de estado 200
// y el siguiente json:
// { 'mensaje': 'hola mundo' }

// 2. - Agrega un endpoint '/api/suma' que responda a una
// petición de tipo GET con la suma de dos números que
// reciba mediante las querys num1 y num2.El servidor
// debe responder con un código de estado 200 y un json
// como el siguiente:
// { 'resultado': 7 }

// 3. - Agrega un endpoint '/api/usuario/' que responda a
// una petición de tipo GET con el nombre que sea
// recibido a través de params.El servidor debe responder
// con un código de estado 200 y un json como este:
// { 'usuario': 'Edwin' }

// 4. - Agrega un endpoint '/api/swapi' que responda a una
// petición de tipo GET con el personaje solicitado de
// https://swapi.co/
// El cliente debe mandar el número de personaje mediante
// params.La respuesta del servidor debe lucir algo así
// {
//     'personaje': {
//         'name': 'Luke Skywalker',
//                         ...,
//     }
// }


/* EJERCICIOS 2: POST PUT */
// 5. - Hacer el ejercicio 2 pero desde un post mandado num1 y num2 desde el body
// 6. - Hacer un PUT que reciba un body y lo responda de vuelta
// 7. - Hacer un delete que reciba como parametro un id (Solo es válido el id: 3, para cualquier otro id responde 404)