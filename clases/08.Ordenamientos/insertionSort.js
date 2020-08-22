function insertionSort(vector){
    for (var i = 0; i < vector.length; i++){
        var pos = i; //Amarillo

        // Mi condición
        // Izquierda vacia
        // - El de la izquierda tiene que ser mayor al de la derecha.

        while ((pos >= 0) && (vector[pos] < vector[pos - 1])){
            //Hacer el cambio
            var aux = vector[pos - 1];
            vector[pos - 1] = vector[pos];
            vector[pos] = aux;
            //Para movernos al elemento anterior
            pos = pos - 1;
        };
    };
    return vector;
};

const miArray = [10,4,40,32,67,12,43,31,65,1];
const resp = insertionSort(miArray);
console.log(resp);


function insertionSortB(vector){
    for (let i = 0; i < vector.length; i++){
        var pos = i;
        // Antes de empezar a desplazar, guardamos la posición en la que ordenamso
        var valor = vector[i];
        while (pos >= 0 && valor < vector[pos - 1]){
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

const miArray2 = [10,4,40,32,67,12,43,31,65,1];
console.log(insertionSortB(miArray2));
