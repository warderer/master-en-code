//1. con la API de la nasa obtener el nombre de los asteroides que fueron peligrosos is_potentially_hazardous_asteroid en un rango de 7 dias

/*
near_earth_objects { fecha[ {name, is_potentially_hazardous_asteroid} ] }
*/

// { 
//     near_earth_objects {
//         2020-09-19 [
//             {0
//                 is_potentially_hazardous_asteroid:true;
//             }
//         ]
//     }
// }


const request = require('request');
const APIKEY = "aC21rie5djZot33iNubooIWwAKixYC2FHyd6oPoU";

function hazardousAsteroids(startDate,endDate){
    const URL = (`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${APIKEY}`);
    request.get(URL, (error, response, body) => {
        json = JSON.parse(body);
        const Asteroides = Object.entries(json.near_earth_objects);
        //arreglo, fecha-arregloDatos, item.dato
        //console.log(Asteroides[0][1][0].is_potentially_hazardous_asteroid);
        for (let dateIndex = 0; dateIndex < Asteroides.length; dateIndex++) {
            for (let itemIndex = 0; itemIndex < Asteroides[dateIndex][1].length; itemIndex++) {
                let actualAsteroid = Asteroides[dateIndex][1][itemIndex];
                let actualDate = Asteroides[dateIndex][0];
                if (actualAsteroid.is_potentially_hazardous_asteroid === true) {
                    console.log(actualDate, actualAsteroid.name);
                }
            }
        }
    });
};

hazardousAsteroids("2020-09-15","2020-09-20");