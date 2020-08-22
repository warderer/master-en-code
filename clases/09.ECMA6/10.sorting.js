/* SORT */
// Usa el método Quick Sort. Considerado de los más eficientes en la actualidad.

const frutas = ['manzana','banana','guanabana'];
frutas.sort();
console.log(frutas); //[ 'banana', 'guanabana', 'manzana' ]

const misNumeros = [1,9,5,7,3];
misNumeros.sort();
console.log(misNumeros); //[ 1, 3, 5, 7, 9 ]

// Sort Ordena de Acuerdo al código de carácter UNICODE, por lo que observamos un ordenado "raro"
// https://en.wikipedia.org/wiki/List_of_Unicode_characters
const misNumeros2 = [1,9,5,7,3,10];
misNumeros2.sort();
console.log(misNumeros2); //[ 1, 10, 3, 5, 7, 9 ]

//Para solucionar el problema anterior, podemos pasarle un CALLBACK

misNumeros2.sort((a, b) => {
    console.log('a:', a);
    console.log('b:', b);
    console.log('-----');
});

/*
a: 10
b: 1
-----
a: 3
b: 10
-----
a: 5
b: 3
-----
a: 7
b: 5
-----
a: 9
b: 7
-----
*/

// Ahora si para ordenarlos
misNumeros2.sort((a,b) => {
    return a-b;
});
console.log(misNumeros2);
//[ 1, 3, 5, 7, 9, 10 ]


// ¿QUE SUCEDIO?
const misNumeros3 = [1,9,5,7,3,10];
misNumeros3.sort((a,b) =>{
    console.log('a:', a);
    console.log('b:', b);
    console.log(a-b);
    console.log('----');
    // No importa el valor en sí, solo revisa más que nada el signo.
    // NEGATIVO: El primer elemento tiene que estar a la izquierda del segundo elemento.
    // POSITIVO: El primer elemento tiene que estar a la derecha del segundo elemento.
    // 0: Los elementos que se comparan son los mismos.
    return a-b;
});
// a: 9
// b: 1
// 8
// ----
// a: 5
// b: 9
// -4
// ----
// a: 5
// b: 9
// -4
// ----
// a: 5
// b: 1
// 4
// ----
// a: 7
// b: 5
// 2
// ----
// a: 7
// b: 9
// -2
// ----
// a: 3
// b: 7
// -4
// ----
// a: 3
// b: 5
// -2
// ----
// a: 3
// b: 1
// 2
// ----
// a: 10
// b: 5
// 5
// ----
// a: 10
// b: 9
// 1
// ----



// Poniendo en práctica ordenando por Edad
const myArrayPersonas = [
    {
        name:'Mariana',
        age:44
    },
    {
        name:'Juan',
        age:19
    },
    {
        name: 'Viviana',
        age:10
    },{
        name: 'Erwino',
        age:22
    }
];

const personasPorEdad = myArrayPersonas.sort((a,b) => {
//     console.log('a:', a);
//     console.log('b:', b);
//     a: { name: 'Juan', age: 19 }
//     b: { name: 'Mariana', age: 44 }
//     a: { name: 'Viviana', age: 10 }
//     b: { name: 'Juan', age: 19 }
//     a: { name: 'Erwino', age: 22 }
//     b: { name: 'Viviana', age: 10 }
    return a.age - b.age;
});
console.log(personasPorEdad);
// [
//     { name: 'Viviana', age: 10 },
//     { name: 'Juan', age: 19 },
//     { name: 'Erwino', age: 22 },
//     { name: 'Mariana', age: 44 }
// ]