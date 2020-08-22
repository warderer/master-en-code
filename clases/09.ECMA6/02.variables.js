// VAR viene de JS Vanilla
var miVariable = 'lo que sea';
miVariable = false;
console.log(miVariable);

// CONST viene de ECMA
const unaConstante = 10;
//unaConstante = 'otro dato'; //ERROR, no se puede cambiar el valor de una constante.
console.log(unaConstante);

// LET se añade en ECMA
let miVariableLet = 'lo que sea';
miVariable = false;
console.log(miVariable);

function funcionX(){
    if (true) {
        let miVariable = 'ES TRUE';
        console.log(miVariable);
    }
    console.log(miVariable); // ERROR, Let miVariable solo vive dentro del bloque del IF
}

var i = 'global';
console.log(i);
function miFunction(){
    //i = 'local'; //Si se usa de esta forma, tiene alcance GLOBAL
    var i = 'local'; //Si se vuelve a poner VAR, tiene alcance LOCAL
    console.log(i);
}
miFunction();
console.log(i);