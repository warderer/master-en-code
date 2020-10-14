import axios from 'axios';
import bootstrap from 'bootstrap';
import Game from './Game';
//import Quiz from './Quiz';
import './styles/main.scss';

function start(){
    //preguntas, categoria, dificultad(easy,medium,hard), tipo(multiple/boolean)
    const game = new Game(10, 11,'hard','multiple');
    //const game = new Game(10,9,'hard','boolean'); //Esta categoria da error, no devuelve preguntas.
    game.init()
}

start();