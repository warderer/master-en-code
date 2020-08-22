// 1, Hacer una función que reciba una pila como parámetro, y un número, la función debe de sacar el número de elementos que diga el número (segundo parámetro)
// Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'], 3)
// Salida: ['Manzana','Cebolla','Apio','Naranja']

function miFuncion(pila,numero){
    for (let index = 0; index < numero; index++) {
        pila.pop();
    };
    return pila;
};

const pila = ['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'];
console.log(miFuncion(pila,3));