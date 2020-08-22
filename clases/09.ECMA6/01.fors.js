const miArray = ['manzana','pera','platano','kiwi'];

// for JavaScript Vanilla
// for (var i = 0; i < miArray.length; i++) {
//     console.log(miArray[i]);
// };

// Método de Arreglos forEach
// miArray.forEach(function(element){
//     console.log(element);
// });

// Callback sin usar función anónoma, con el mismo resultado que el anterior
function callbackDelForEach(element){
    console.log(element);
}

miArray.forEach(callbackDelForEach);




// EJEMPLOS DE FORS
const emojiArray = ['🧮','⏰','🚑','⚓'];
// FOR - OF: Funciona muy parecido al FOR EACH: Devuelve lo que hay adentro.
for (let emoji of emojiArray){
    console.log(emoji);
}

// FOR - IN: Devuelve el indice.
for (let i in emojiArray){
    console.log(i);
}


const miObj = { name: 'Carro', emoji: '🚓'};

for (let key in miObj){
    console.log(key); //Devuelve name y emoji
}

//MARCA ERROR, el OF solo funciona para arreglos.
// for (let obj of miObj){
//     console.log(obj); 
// }