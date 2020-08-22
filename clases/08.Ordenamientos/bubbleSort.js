function bubbleSort(array){

    for (var i=0; i < array.length; i++){
        for (var j = 0; j < array.length; j++){
            //console.log('i: ' + array[i]);
            //console.log('j: ' + array[j]);

            //Comprobar si el valor actual es amyor que el siguiente
            if (array[j] > array[j+1]){
                var currentNumber = array[j];
                //Ahora la posición actual obtiene el valor de la siguiente posición.
                //Y la siguiente posición obtiene el valor de la posición actual.
                array[j] = array[j+1];
                array[j+1] = currentNumber;
            };
        };
    };
    return array;
};

const miArray = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];

console.log(bubbleSort(miArray));