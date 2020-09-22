console.log("---Todo en Cola de Ejecución---");
console.log(1);
console.log(2);
console.log(3);

//Respuesta de consola:
//1
//2
//3
console.log("---El 2 va a la Pila de Ejecución---");
console.log(1);
// SetTimeout Espera N segundos para ejecutar un CALLBACK.
// Recibe 2 parametros: setTimeout(callback, milisegundos)
setTimeout(()=>{ //Simular Ir a Base de Datos con un callback;
    return console.log(2)
},3000);
setTimeout(()=>{
    return console.log(3)
},2000);
console.log(4);


console.log("---Simulación de Cuello de Botella---");
console.log(1);
setTimeout(()=>{
    return console.log(2);
},2000);
for (let index = 0; index < 9999999999; index++);
console.log(3);