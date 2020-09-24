const request = require("request");
const URI = "https://pokeapi.co/api/v2/pokemon/pikachu";

request.get(URI, (error, response, body) =>{
    const bodyEnFormatoJSON = JSON.parse(body); //Parse convierte JSON a Objeto
    console.info(response.statusCode, response.statusMessage);
    console.log(bodyEnFormatoJSON.name);
    //console.info(error);
});