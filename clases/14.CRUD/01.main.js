const request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1';

const jsonSend = {
    name: "Pedro",
    last_name: "Gómez",
    nacionalidad: "MX",
    biography: "Un trailero bien chido",
    gender: "M",
    age: 30
};

const objConfig = {
    url: `${URL_BASE}/authors/`,
    form: jsonSend
};

request.post(objConfig, (err, response, body) =>{
    if (response.statusCode === 201) {
        const json = JSON.parse(body);
        console.log(json);
    } else {
        console.log('Error al crear el Author');
    }
});

