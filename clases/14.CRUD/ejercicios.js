// 1.- Escribe una función que reciba como parámetros nombre,
//         nacionalidad, biografía, género y edad para hacer una
//         petición a la API para crear un autor nuevo.
//         La función debe retornar el autor nuevo en una promesa. (then y catch)

// createAuthor("prueba crear","last name primera","MX","bio primera","M",53)
//      .then(nuevoAutor => console.log(nuevoAutor))
//      .catch(error =>console.log(error)) 

const request = require('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1';

const createAuthor = (authorData) => {
    const objConfig = {
        url: `${URL_BASE}/authors/`,
        form: authorData
    };

    return new Promise((resolve, reject) => {
        request.post(objConfig, (err, response, body) =>{
            if (response.statusCode === 201) {
                const json = JSON.parse(body);
                resolve(json);
            } else {
                reject('Error al crear el Author');
            };
        });
    });
};

const persona = {
    name: "Pedro",
    last_name: "Gómez",
    nacionalidad: "MX",
    biography: "Un trailero bien chido",
    gender: "M",
    age: 30
};

/*
createAuthor(persona)
    .then(nuevoAutor => console.log(nuevoAutor))
    .catch(error =>console.log(error));
*/

// 2.- Escribe una función que reciba como parámetro un ID
//     para realizar una petición a la API para hallar un
//     autor con el ID especificado. La función debe retornar
//     una promesa con la respuesta del servidor. (get)
//     /api/v1/authors/{id}/

const findAuthor = (id) => {
    return new Promise((resolve, reject) => {
        const URI = `${URL_BASE}/authors/${id}`;
        request.get(URI,(err, response, body) => {
            if (response.statusCode === 200) {
                const json = JSON.parse(body);
                resolve(json);
            } else {
                reject(err);
            }
        });
    });
};

// findAuthor(12255).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err, 'Error al encontrar el author');
// });


// 3.- Escribe una función que reciba como parámetros nombre,
//     nacionalidad, biografía, género y edad para hacer una
//     petición a la API para modificar un autor existente.
//     Al ejecutar La función, esta debe retornar el autor
//     modificado en una promesa. (PATCH)
//     partial_update:
//     PATCH /api/v1/authors/{id}/

const patchAuthor = (id, updatedData) => {
    const objConfig = {
        url: `${URL_BASE}/authors/${id}/`,
        form: updatedData
    };

    return new Promise((resolve, reject) => {
        request.patch(objConfig, (err, response, body) =>{
            if (response.statusCode === 200) {
                const json = JSON.parse(body);
                resolve(json);
            } else {
                reject(err,'Error al actualizar el Author');
            }
        });
    });
};


const updatedJSONData = {
    name: "Jeil",
    age: 38
};

patchAuthor(12255, updatedJSONData).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});


// 4.- Escribe una función que reciba como parámetro un ID
//     para realizar una petición a la API para eliminar un
//     autor con el ID especificado. La función debe retornar
//     una promesa con la respuesta del servidor. (DELETE)
//     delete
//     DELETE /api/v1/authors/{id}/

const deleteAuthor = (id) => {
    const objConfig = {
        url: `${URL_BASE}/authors/${id}/`,
    };

    return new Promise((resolve, reject) => {
        request.delete(objConfig, (err, response, body) =>{
            if (response.statusCode === 204) {
                resolve('OK');
            } else {
                reject('Error al borrar:',err);
            };
        });
    });
};

deleteAuthor(5284).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err);
});

// 5.- Encadenando promesas, es decir, usando las funciones
//         que escribiste en los puntos previos:
//         Crea un autor nuevo, luego modifica su nombre y
//         apellido y finalmente elimínalo. Muestra en consola
//         el resultado de cada petición (creación, modificación
//         y eliminación).
//TODO: Encadenar promesas