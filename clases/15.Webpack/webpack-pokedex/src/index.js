import axios from 'axios';
import 'bootstrap';
import './styles/main.scss';

function init(){ //App Start
    //Solicitar los datos de los Pokemons
    const URI = 'https://pokeapi.co/api/v2/pokemon?limit=1050&offset=0';
    axios.get(URI)
        .then((response) => {
            console.log("Status Code:",response.status); //status de la petición
            console.log(response.data.results); //data es donde tiene la información
        }).catch((error) => {
            console.log("Error:",error);
        });
}

init();