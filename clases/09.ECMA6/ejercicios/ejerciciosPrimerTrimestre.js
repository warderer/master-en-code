// Ejercicios primer trimestre Master

// 01.Crear una función que dado un año determine si es un año bisiesto o no. Ej---> isLeap(2016) Resultado ----> true
const isLeap = (year) => ((year%4 === 0)&&(year%100 != 0)||(year%400 === 0)) ?  true : false;
console.log("01. 2016 es bisiesto?",isLeap(2016)); //true
console.log("01. 2019 es bisiesto?",isLeap(2019)); //false

// 02.Crear una función que genere un numero aleatorio entre 1 y 10, esta función recibe un numero como parametro si el numero es igual al numero generado aleatoriamente regresara "Buen Trabajo" de lo contrario regresara "Intenta de nuevo". Ej ---> randomGuess(7) resultado ---> "Buen trabajo" o "Intenta de Nuevo"
const randomGuess = (numero) => (numero === Math.floor(Math.random()*11)) ? "Buen Trabajo" : `Intenta de Nuevo`;
console.log("02. randomGuess:",randomGuess(5));

// 03.Escribe una función que reciba un string como parametro y regrese el string con "Py" al principio, si el string ya tiene "Py" regresar el string original Ej ---> addPy("hola") resultado ---> "Pyhola"
const addPy = (string) => /^Py/.test(string) ? string : "Py"+string;
console.log("03.addPy(hola)",addPy("hola")); //Pyhola
console.log("03.addPy(Pyhola)",addPy("Pyhola")); //Pyhola

// 04.Escriba una funcion JavaScript para eliminar un carácter en la posición especificada de una cadena dada y devolver la nueva cadena Ej ---> removeChar("Hola",2) resultado --> "Hoa"
const removeChar = (string,position) => (string.split("").filter((element,index) => index != position ? element : null)).join(""); //Convierto el String a Arreglo (Split), Recorro el arreglo y hago null solo la posición a remover del arreglo (filter), y finalmente vuelvo a convertir el resultado a String (join).
console.log("04. RemoveChar: ",removeChar("Hola",2));

// 05.Escriba un programa JavaScript para crear una nueva cadena a partir de una cadena dada cambiando la posición del primer y último carácter. La longitud de la cadena debe ser mayor o igual a 1. Ej ----> firstLast("Hola") resultado ---> "aolH"
const firstLast = (texto) => {
    if (texto.length > 1) {
        texto = texto.split(""); //Separo el texto en un arreglo de caracteres
        const firstLetter = texto[0]; //Guardo la primera letra
        const lastLetter = texto[texto.length-1]; //Guardo la última letra
        texto[0] = lastLetter;
        texto[texto.length-1] = firstLetter;
        return texto.join(""); //Pego el arreglo de caracteres nuevamente en un string
    }
}
console.log("05. firstLast:",firstLast("Hola")); //aloH

// 06.Escriba un programa JavaScript para cambiar el uso de mayúsculas en todas las letras de una cadena determinada. Ej ---> changeMayus("ComoEstas") resultado ---> "cOMOeSTAS"
const changeMayus = (texto)=>{
    texto = texto.split("")
    .map((caracter)=>{
        return caracter === caracter.toUpperCase() ? caracter.toLowerCase() : caracter.toUpperCase();
    });
    return texto.join("");
}
console.log("06. changeMayus(ComoEstas):",changeMayus("ComoEstas"));

// 07.Escriba una función de JavaScript para redondear un número a una cantidad específica de dígitos. Ej ---> roundNumber(2.3453467335,2) resultado -> 2.34
const roundNumber = (number,roundTo)=>{
    const numbArray = number.toString().split(""); //Transformo el número en un Array de cada elemento
    const dotIndex = numbArray.findIndex(dot => dot === "."); // Busco en que posición se encuentra el .
    try {
        Number(numbArray[dotIndex+roundTo+1]) > 5 ? numbArray[dotIndex+(roundTo)]++ : null ; // Si es mayor a 5 redondeo hacia arriba el elemento previo, si no, lo dejo tal cual.
        return numbArray.join("").slice(0,dotIndex+roundTo+1); //Vuelvo a armar el string a partir del arreglo, y corto de acuerdo al número de decimales indicados
    } catch (error) {
        console.log(error);
    };
};
console.log("07. Redondeando 2.3453467335 a 2 dec:",roundNumber(2.3453467335,2));
console.log("07. Redondeando 12.3463467335 a 2 dec:",roundNumber(12.3463467335,2));

// 08.Escriba una función de de JavaScript para crear una nueva cadena a partir de una cadena dada con el primer carácter de la cadena dada agregado al principio y al final. Ej --> addFisrt("Hola") resultado ---> "HHolaH"
const addFirst = (string) => {
    const first = string[0];
    string = string.split("");
    string.push(first);
    string.unshift(first);
    return string.join("");
};
console.log("08. addFirst(Hola):",addFirst("Hola")); //HHolaH

// 09.Escriba una función deJavaScript para verificar si dos valores enteros dados están en el rango 50..99 (inclusive). Devuelve verdadero si alguno de ellos está en dicho rango. Ej --> inRange(55,47) resultado ---> true
const inRange = (num1,num2) => (num1 >= 50 && num1 <=99 || num2 >= 50 && num2 <=99 ? true : false);
console.log("09. inRange 50-99 para (55,47):",inRange(55,47)); //true
console.log("09. inRange 50-99 para (25,47):",inRange(25,47)); //false

// 10.Escriba una función de JavaScript para contar el número de vocales en una cadena dada.
const countVowels = (string) => string.match(/[aeiou]/gi).length; //Genero un arreglo con solo las vocales (match[]) y despues pregunto la lontigud de ese arreglo (length)
console.log("10. Contar vocales en Hola MundO:",countVowels("Hola mundO")); //[ 'o', 'a', 'u', 'O' ] = 4

// 11.Escriba una función de Javascript que convierta un numero a formato moneda Ej ---> convertExchange(2000) resultado --> "$2,000.00"

// 12.Hay dos matrices con valores individuales, escriba un programa JavaScript para calcular la suma de cada valor de índice individual de las matrices dadas Ej. sumIndex([1,0,2,3,4],[3,5,6,7,8,13]) salida --> [4, 5, 8, 10, 12, 13]

// 13.Escriba una función de JavaScript para encontrar la diferencia de dos matrices. Ej difference([1, 2, 3], [100, 2, 1, 10]) Resultado --> ["3", "10", "100"]

// 14.Escriba una función de JavaScript para eliminar. Valores 'nulo', '0', '""', 'falso', 'indefinido' y 'NaN' de una matriz. Ej removeFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]) resultado ----> [15, -22, 47]
const removeFalsy = (array) => array.filter((element) => {
        if (element||false) return element;
});

console.log("14. removeFalsy: ",removeFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]));// resultado ----> [15, -22, 47])

// 15.Escriba una función de JavaScript para ordenar la siguiente matriz de objetos por valor de título. let ibrary = [ { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} ];

// 16.Escriba un programa JavaScript para encontrar un par de elementos (índices de los dos números) de una matriz dada cuya suma sea igual a un número objetivo específico. Ej findPairs([10,20,10,40,50,60,70],50) resultado --> 2,3

// 17.Escriba una función de JavaScript que devuelva una cadena pasada con letras en orden alfabético. Ej orderWord("webmaster") resultado ---> "abeemrstw"

// 18.Escriba una función de JavaScript que acepte una cadena como parámetro y busque la palabra más larga dentro de la cadena. Ej. largeWord("Web Development Tutorial") resultado ---> 'Development'

// 19.Escribe una función de JavaScript para convertir una cantidad en monedas. Ej amountTocoins(46, [10, 5, 2, 1]) Resultado --> 10,10,10,10,5,1

// 20.Escriba una función de JavaScript para generar una matriz entre dos enteros de 1 paso de longitud. Ej. rangeBetwee(4, 7) resultado --> [4, 5, 6, 7] rangeBetwee(-4, 7) resultado --> [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]