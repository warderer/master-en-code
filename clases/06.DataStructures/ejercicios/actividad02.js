// 2.- Escribir una función reemplazar que tenga como parámetro una pila de elementos de tipo Number y dos valores también de tipo Number nuevo y viejo de forma que si el segundo valor aparece en algún lugar de la pila,sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
// Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
// Salida: [3,2,3,4,6,8,1,7]

function reemplazar(pila,nuevo,viejo){
    let found = 0;
    for (let index = 0; index < pila.length; index++) {
        if (pila[index]===viejo){
            pila[index] = nuevo;
            found = index;
        } 
    }
    for (let index = 0; index < (pila.length-found); index++) {
        pila.pop();
    }
    return pila;
};

const pila = [3,2,3,4,6,8,1,2,5,5];
console.log(reemplazar(pila,7,2,));