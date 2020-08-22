// Tiene que devolver la posición en que se encuentra el elemento a buscar
function busquedaSecuencial(array, elementToFind) {
    //array
    //elemento a buscar
    //tamaño del array
    const tamano = array.length;
    for(var i = 0; i<tamano; i++){
        //console.log(miArray[i]);
        if (array[i] === elementToFind){
            return i;
        }
    }
    return -1;
};

const miArray = [3,4,7,8,2,10,5,6];

console.log(busquedaSecuencial(miArray, 8)); // --> 3
console.log(busquedaSecuencial(miArray, 11)); // --> -1

console.log(miArray.indexOf(8));