/* REGULAR EXPRESSION - REGEX | REGEXP */
/* Sirven para buscar patrones */

// Formas de Escribir un RegEx
const miPrimerRegex = new RegExp('abc');
const miSegundoRegex = /abc/;

// Aplicando RegEx previamente declarados con .test(cadena)
const miString = 'abcdefgh';
const miString2 = 'acbdefgh';

console.log(miPrimerRegex.test(miString)); //true
console.log(miSegundoRegex.test(miString)); //true
console.log(miPrimerRegex.test(miString2)); //false
console.log(miSegundoRegex.test(miString2)); //false

// Combinando Regex con Replace
console.log(miString.replace(miSegundoRegex, 'ABC')); //ABCdefgh

// Reemplaza solo el primer elemento
const texto = 'Hola mundo desde mi mundo';
console.log(texto.replace('mundo','TIERRA')); //Hola TIERRA desde mi mundo

const texto2 = 'Hola mundo desde mi mundo';
const miOtroRegex = /mundo/;
console.log(texto2.replace(miOtroRegex,'TIERRA')); //Hola TIERRA desde mi mundo

// Si quiero reemplazar TODAS las coincidencias, es necesario añadir la flag g de Búsqueda Global.
const miOtroRegex2 = /mundo/g;
const texto3 = 'Hola mundo desde mi mundo';
console.log(texto3.replace(miOtroRegex2,'TIERRA')); //Hola TIERRA desde mi TIERRA

// Probando Regex de validar correo.
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
console.log(emailRegex.test('cesar@cesarguerra.mx')); //true
console.log(emailRegex.test('cesarcesarguerra.mx')); //false
console.log(emailRegex.test('cesar@cesarguerramx')); //false
console.log(emailRegex.test('cesar@c.mx')); //true

