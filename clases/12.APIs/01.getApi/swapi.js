//https://swapi.dev/
//ENDPOINTS
//https://swapi.dev/api/people/1

// Request es una biblioteca que nos ayuda a consumir endPoints
const request = require("request");

// El metodo GET tiene dos parametros, el endPoint (URL) y un callback

request.get("https://swapi.dev/api/people/1", (error, response, body) =>{
    console.log("Ya termino de pedir la info al endpoint");
    //console.log(body); 
    const bodyEnFormatoJSON = JSON.parse(body); //Parse convierte JSON a Objeto
    console.log(bodyEnFormatoJSON);
    console.info(response.statusCode, response.statusMessage);
    console.log(bodyEnFormatoJSON.name);
    //console.info(error);
});

/* Convirtiendola a función... */
function getPeopleById (id) {
    request.get(`https://swapi.dev/api/people/${id}`, (error, response, body) =>{
        if (response.statusCode === 200) {
            //Petición Éxitosa
            const bodyEnFormatoJSON = JSON.parse(body); //Parse convierte JSON a Objeto
            console.log(bodyEnFormatoJSON);
            console.log(bodyEnFormatoJSON.name);
        } else {
            // Error
            console.log(`Ocurrio un Error: ${response.statusCode} ${response.statusMessage}`);
        };
    });
};

getPeopleById(2);