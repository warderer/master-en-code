/* --- charAt ---*/
// charAt ---> Busca el carácter en una posición especifica.
const myString = "Hola Mundo";
console.log("Carácter en la posición 2:",myString.charAt(2));
//Carácter en la posición 2: l

console.log("Carácter en la posición x:",myString.charAt());
//Carácter en la posición x: H


/* --- indexOf ---*/
// Poner la posición del primer caracter encontrado en especifico, de izquierda a derecha
console.log("El indice de la O ---> ", myString.indexOf('o'));
//El indice de la O --->  1


/* --- lastIndexOf ---*/
// Lo mismo que indexOf pero de derecha a izquierda
console.log("El indice de la O ---> ", myString.lastIndexOf('o'));
//El indice de la O --->  9


/* --- Split & Join ---*/
// Split ---> Corta el String cuando encuentra el caracter, generando un arreglo de elementos
console.log("El split de mi string", myString.split(" "));
//El split de mi string [ 'Hola', 'Mundo' ]

//Join ---> Une los elementos de un arreglo en un String a través de un carácter definido.
const palabras = ["Hola","Soy","Un","String"]
console.log("El Join de mi Arreglo:",palabras.join(" "));
//El Join de mi Arreglo: Hola Soy Un String


/* --- Replace ---*/
// Busca un texto y reemplaza por la primera ocurrencia
console.log("Reemplazo Mundo por Todos: ",myString.replace("Mundo","a todos"));
// Reemplazo Mundo por Todos:  Hola a todos