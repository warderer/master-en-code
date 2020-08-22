// Ejercicios ordenamiento
// 1. Crea una función que ordene de forma descendente  un arreglo de numeros
//                Ej. Entrada --> [9,3,1,6,5,88,-1,2,7]  Salida → [88,9,7,6,5,3,1,-1]
function bubbleSort(array,sort){
    for (var i=0; i < array.length; i++){
        for (var j = 0; j < array.length; j++){
            //Si el modo de ordenamiento es DESCENDENTE, en caso contrario es ascendente
            var condicion = array[j] > array[j+1];
            if (sort === "DESC") {
                condicion = array[j] < array[j+1];
            }

            if (condicion){
                var currentNumber = array[j];
                array[j] = array[j+1];
                array[j+1] = currentNumber;
            };
        };
    };
    return array;
};
const miArray = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
console.log("-ORDENAR DESCENDENTE-");
console.log(bubbleSort(miArray,"DESC"));
console.log("----------");

// 2. Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/
//                Ej. Entrada ---> [‘b’,’h’,’w’,’e’,’a’] Salida ----> [‘a’,’b’,’e’,’h’,’w’]

function asciiSort(array){
    for (var i=0; i < array.length; i++){
        for (var j = 0; j < array.length; j++){
            //Si el modo de ordenamiento es DESCENDENTE, en caso contrario es ascendente
            var itemA = array[j];
            if (array[j+1] != undefined){
                var itemB = array[j+1];
            } else {
                break;
            }
            if (itemA.charCodeAt() > itemB.charCodeAt()){
                var currentNumber = array[j];
                array[j] = array[j+1];
                array[j+1] = currentNumber;
            };
        };
    };
    return array;
};
console.log("-ORDENAR CARACTERES POR ASCII-");
const misCaracteres = ["b","h","w","e","a"];
console.log(asciiSort(misCaracteres));
console.log("----------");



// 3. Crear una clase Alumno cons los siguientes datos:
//                 Nombre y calificaciones(arreglo de 5 números) y tiene un método promedio
//                Crear otra clase llamada Salon que tenga un método que ordene por promedio de alumno de mayor a menor promedio

class Alumno {
    constructor (nombre,calificaciones) {
        this._nombre = nombre;
        this._calificaciones = calificaciones;
    }

    promedio(){
        let suma = 0;
        for (let index = 0; index < this._calificaciones.length; index++) {
            suma = suma + this._calificaciones[index];
        }
        const promedio = suma / this._calificaciones.length;
        return promedio;
    }
}

class Salon {
    constructor (id) {
        this._id = id;
        this._alumnos = [];
    }

    addAlumno (alumno){
        this._alumnos.push(alumno);
    }

    sortPromedio(){
        let promedios = [];
        for (let index = 0; index < this._alumnos.length; index++) {
            promedios.push(this._alumnos[index].promedio());
        }
        return bubbleSort(promedios);
    }
}

var alumno1 = new Alumno("Pedro Gomez",[100,80,90,80,85]);
var alumno2 = new Alumno("Ramiro Valle",[60,70,70,90,80]);
var alumno3 = new Alumno("Lilias Rosa",[100,90,95,85,90]);
var salon1 = new Salon(404);
salon1.addAlumno(alumno1);
salon1.addAlumno(alumno2);
salon1.addAlumno(alumno3);
console.log(alumno2.promedio());
console.log(salon1.sortPromedio());


// 4. Crear una funcion que ordene palabras de menor numero de letras a mayor
//                Ej Entrada [”adios”,”hola”,”maximo”,”uno”,”despedida”] salida -> [“”uno,“hola”,”adios”,”maximo”,”despedida”]

function insertionSortLetras(vector){
    for (let i = 0; i < vector.length; i++){
        var pos = i;
        // Antes de empezar a desplazar, guardamos la posición en la que ordenamos
        var valor = vector[i];
        while (pos >= 0 && valor.length < vector[pos - 1].length){
            //En vez de hacer el intercambio solo desplazamos.
            //Buscamos el sitio donde deberia ir
            vector[pos] = vector[pos - 1];
            pos = pos - 1;
        };
        // Como ya sabemos en que posición debería de ir solo ponemos ahi en vez de ir paso por paso
        vector[pos] = valor;
    }
    return vector;
}
const palabras = ["adios","hola","maximo","uno","despedida"];
console.log(insertionSortLetras(palabras));

// 5. Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0
//                Entrada -> [[7,3],[2,2],[1,0],[4,3]]  Salida ---> [[1,0],[2,2],[4,3],[7,3]]
// asciitable.comasciitable.com
// Ascii Table - ASCII character codes and html, octal, hex and decimal chart conversion
// Ascii character table - What is ascii - Complete tables including hex, octal, html, decimal conversions