var semaforoActual = 'ROJO';
//alert(semaforoActual);

var semaforoActual = prompt('En que color esta el semaforo?')

if (semaforoActual === 'VERDE') {
    //bloque de codigo
    alert('AVANZA');
} else if (semaforoActual === 'AMARILLO') {
    alert('ACELERAR');
} else {
    alert('DETENTE');
}



/*
rojo -> DeviceRotationRate
amarillo -> Corre
verde -> Avanza
*/