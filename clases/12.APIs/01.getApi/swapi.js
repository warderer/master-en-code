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
