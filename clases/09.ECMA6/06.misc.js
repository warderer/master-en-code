/* --- OPERADOR TERNARIO ---*/
// Operador Ternario: Condición IF/ELSE de una sola linea
// SINTAXIS:  (condición) ? (si es cierto) : (si es falso);
// Como limitante se deben escribir en una sola linea, que es la que se retorna.

let edad = 18;
// En una sola linea, asignamos el resultado de un IF en una constante/variable.
const mayorEdad = (edad >= 18) ? "Es mayor de edad" : "No es mayor de edad"; //Sugar Syntax
console.log(mayorEdad); //Es mayor de edad

// Se pueden poner un operador ternario dentro de otro,
// PERO NO ES UNA BUENA PRÁCTICA POR FALTA DE LEGIBILIDAD
edad = 60;
const esMaduro = (edad >=18 && edad <=50) ? "Es mayor de edad" : (edad > 50) ? "Es una persona madura" : "Es menor de edad";
console.log("Es maduro:",esMaduro); //Es maduro: Es una persona madura

// Esta función es el equivalente al operador ternario anterior.
let esMaduro2 = "";
if(edad >=18 && edad <= 50){
    esMaduro2 = "Es mayor de edad";
} else if (edad > 50){
    esMaduro2 = "Es una persona madura";
} else {
    esMaduro2 = "Es menor de edad";
}
console.log("Es Maduro2:",esMaduro2); //Es Maduro2: Es una persona madura


/* --- VERIFICAR SI TIENE UN VALOR Y SI NO ASIGNAR UN VALOR POR DEFECTO ---*/

const myConst = "Hay algo";
const myOtraConst = myConst || "Valor por default"; // || Se ocupa cuando queremos tener un valor por default
console.log("Checando valores:",myOtraConst); // Checando valores: Hay algo

const myConst2 = undefined;
const myOtraConst2 = myConst2 || "Valor por default"; // || Se ocupa cuando queremos tener un valor por default
console.log("Checando valores:",myOtraConst2); // Checando valores: Valor por default

//falsy --> un valor en js que se puede tomar como true o false;
// "" --> false;
// 0 --> false;
const myConst3 = "";
const myOtraConst3 = myConst3 || "Valor por default"; // || Se ocupa cuando queremos tener un valor por default
console.log("Checando valores:",myOtraConst3); // Checando valores: Valor por default

const myConst4 = 0;
const myOtraConst4 = myConst4 || "Valor por default"; // || Se ocupa cuando queremos tener un valor por default
console.log("Checando valores:",myOtraConst4); // Checando valores: Valor por default
