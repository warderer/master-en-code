import axios from 'axios';
import 'bootstrap';
import './styles/main.scss';
import Pokedex from './Pokedex';

function init(){ //App Start
    //Solicitar los datos de los Pokemons
    const pokemonCount = 10;
    const URI = `https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}&offset=0'`;
    axios.get(URI)
        .then((response) => {
            console.log("Status Code:",response.status); //status de la petición
            //console.log(response.data.results); //data es donde tiene la información
            const pokedex = new Pokedex(response.data.results);
            pokedex.createPokedex();
        }).catch((error) => {
            console.log("Error:",error);
        });
}

init();