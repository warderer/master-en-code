/* MAP */
// Map ---> Convierte un arreglo en otro arreglo distinto,
//          al cual puede aplicarsele una operación por elemento.

const myArray = [1,2,3,4,5,6];
// Ejemplo: Necesito sacar el cuadrado de cada número en myArray

const arrayCuadrado = [];
for (let index = 0; index < myArray.length; index++) {
    const numero = myArray[index];
    arrayCuadrado.push(numero**2); //va a meter el cuadrado de los numeros
}

console.log("El cuadrado de mis numeros es: ", arrayCuadrado);
//El cuadrado de mis numeros es:  [ 1, 4, 9, 16, 25 ]

// Lo anterior se puede simplificar con el uso de MAP
// El Map siempre debe tener un return

const arrayCuadrado2 = myArray.map((numero)=>{
    return numero **2; // Siempre tengo que devolver un valor
});

console.log("El cuadrados de mis numeros con map es:",arrayCuadrado2);

// Agregar la masa corporal a cada objeto
const team = [
    {name:"Edwin", weight:70, height:1.8},
    {name:"Raúl", weight:60, height:1.7},
    {name:"Mali", weight:40, height:1.5},
];
//TODO: Realizar el ejemplo anterior


/* FILTER */
// filter ---> Itera en un arreglo y crea uno completamente nuevo transformado

// Buscar que número de myArray son multiplos de 2
const multiplos = myArray.filter((numero)=>{
    const data = (numero % 2 ===0) ? (numero **2) : null;
    return data;
    // Siempre tengo que devolver un valor
});
console.log("Los números multiplos de 2 con filter son",multiplos);


/* FIND */
// El find busca dentro del arreglo y regresa la PRIMER coincidencia
const numeroEncontrado2 = myArray.find((numero) => {
    return numero === 5;
});
console.log(numeroEncontrado2);



/* MAP */
// Permite seleccionar solo ciertos resultados.

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

// Realizamos un Filtro para Seleccionar solo los que tengan más de 20 años
const myArrayFiltered = myArrayPersonas.filter((person)=>{
    return person.age >= 20;
});
console.log('Solo con Filter:',myArrayFiltered);
//Solo con Filter: [ { name: 'Mariana', age: 44 }, { name: 'Erwino', age: 22 } ]

//Si quiero que solo me devuelva un arreglo con SOLO los nombres
const myArrayMapped = myArrayFiltered.map((person) => person.name);
console.log('Map:',myArrayMapped);
// Map: [ 'Mariana', 'Erwino' ]

// Lo anterior se puede realizar con una sola constante usando CADENAS
// Para facilidad de lectura, se suele colocar cada "cadena" en una linea diferente
const myArrayEnTodo = myArrayPersonas
    .filter((person) => person.age >= 20)
    .map((person) => person.name);


console.log('Filter y Map encadenados:',myArrayEnTodo);
// Filter y Map encadenados: [ 'Mariana', 'Erwino' ]