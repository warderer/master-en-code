// 1 .- Crear una función que encuentre el número más repetido en un array
// 	Ej. Input - [3,6,1,8,2,3,6,3,2,5,6]
// 	Salida -> 6





// 2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras
// 	Ej input -> [8,'e',7,2,'a','d','f',2,3,1,4,3]
// 	Salida → ['e','a','d','f']
function findChars(array){
    const lettersArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (typeof(element) === "string"){
            lettersArray.push(element);
        };
    }
    return lettersArray;

}
console.log(findChars([8,'e',7,2,'a','d','f',2,3,1,4,3]));



// 3.- Crear una función que busque el numero más grande en un arreglo
// 	Ej [1,4,7,2,4,1,9,4,0,2,4,5,12]
// 	Salida -> 12

function biggerNumber(array){
    var mayor = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element >= mayor){
            mayor = element;
        }
    }
    return mayor;
};

console.log('El número mayor es',biggerNumber([1,4,7,2,4,1,9,4,0,2,33,4,5,22]));


// 4.- Crear una función que busque el numero más pequeño en el arreglo
// 	Ej. [1,4,5,-1,-7,2,3,9]
// 	Salida -->  -7

function smallerNumber(array){
    let menor = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element <= menor){
            menor = element;
        }
    }
    return menor;
};

console.log('El número menor es',smallerNumber([1,4,5,-1,-7,2,3,9]));



// 5.- Crear una clase llamada  Contacto con los siguientes datos
// Nombre 
// Apellidos
// Telefono
//     Después crear una clase que sea ListaContactos la cual tendrá dos métodos
// Agregar un contacto
// Buscar un contacto por nombre