import axios from 'axios';
import bootstrap from 'bootstrap';
import Game from './Game';
import './styles/main.scss';

document.getElementById("startButton").addEventListener("click", function(){
    event.preventDefault();
    start();
});

function start(){
    let category = parseInt(document.getElementById("categorySelect").value);
    //category = isNaN(category) ? category : parseInt(category);
    let difficulty = document.getElementById("difficultySelect").value;
    let type = document.getElementById("typeSelect").value;
    //preguntas, categoria, dificultad(easy,medium,hard), tipo(multiple/boolean
    //const game = new Game(10,9,'hard','boolean'); //Esta categoria da error, no devuelve preguntas.
    const game = new Game(10, category,difficulty,type);
    console.log(category,difficulty,type);
    game.init();
}


