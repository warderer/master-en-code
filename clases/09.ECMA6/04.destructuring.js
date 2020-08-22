// De objetos
// La Desestructuración nos permite evitar repetir el nombre si se llaman igual.

/* DESTRUCTURACIÓN DE OBJETOS */

const dulce = true;

const miObj = {
    id: 1,
    name: 'Manzana',
    emoji: '🍎',
    color: 'rojo',
    precio: 30,
    dulce, // equivale a dulce: dulce, (por que se llaman igual)
}

console.log(miObj);

//const name = miObj.name;
//const { name } = miObj; //Esto es lo mismo que lo anterior
//console.log(name);

//Si quisiera sacar más de un atributo tengo que hacer:
// const name = miObj.name;
// const id = miObj.id;

// con Desestructuración se simplifica:
// const { name, id } = miObj;
// console.log(name);
// console.log(id);

const { name, _id:elID} = miObj; //Puedo renombrar como se llama una variable, _id pasa a ser elID
console.log(miObj);


/* DESTRUCTURACIÓN DE ARREGLOS */
const array = ['Papa', 'Cebolla', 'Pepino'];

//const laPapa = array[0];
//const elPeino = array[2];

//La forma de desestructurar arreglos es con  [] en vez de {}
//El ORDEN se tiene que respetar para que funcione. 
//En este caso coloco la cebolla aunque no la necesite
const [laPapa, laCebolla, elPepino] = array;

//Otra opción es usar un _ solo para inficar que es algo que no voy a utilizar
// const [laPapa, _, elPepino] = array;

console.log(laPapa); // Papa
console.log(elPepino); // Pepino