// CODIGO EN JS VANILLA
function suma (a,b) {
    return a + b;
}
const resp = suma(10,30);
console.log('suma:',resp);

// USO DE FUNCION ANONIMA
const sumaDos = function (a,b) {
    return a + b
}

const resp2 = sumaDos(10,30);
console.log('suma 2:',resp2);

// ES6: ARROW FUNCTIONS - Nos ayuda a evitar escribir la palabra function.
const sumaTres = (a,b) => {
    return a + b;
}

const resp3 = sumaTres(10,30);
console.log('suma 3:',resp3);

//OBSERVAMOS QUE EN TODOS LOS CASOS, EL RESULTADO ES EL MISMO

// LAS ARROW FUNCTION TAMBIÉN NOS PUEDEN EVITAR USAR LA PALABRA RETURN SI
// EL CÓDIGO SE EJECUTA EN UNA SOLA LINEA

const sumaCuatro = (a,b) => a+b; //return implicito por tener una sola linea de código.

const resp4 = sumaCuatro(10,30);
console.log('suma 4:',resp4);


// EJEMPLOS DE USO COMÚN DE ARROW FUNCTION
const miArray = ['🧑','✈','🏈','⚓'];
miArray.forEach((element)=>console.log(element));

