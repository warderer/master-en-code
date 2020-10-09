import axios from 'axios'; //Similar a Request, pero usa Promesas directamente
import Game from './Game';
import './styles/main.scss';

function init(){
    //aqui voy a hacer la llamada a API de los datos
    const URI = 'https://restcountries.eu/rest/v2/all';
    axios.get(URI)
        .then((response) => {
            //Aqui ya obtengo mis paises
            console.log(response.status) //status de la petición
            console.log(response.data); //data es donde tiene la información
            const game = new Game(response.data);
            game.start();
        }).catch((error) => {
            //Aqui paso un error al tratar de obtener los paises
            console.log("Error:",error);
        });
}

init();