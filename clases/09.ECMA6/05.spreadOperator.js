// * SPREAD OPERATOR CON ARREGLOS *

let miArray = ['Amarillo', 'Rojo', 'Azul'];
const miArrayDos = ['Negro', 'Blanca', ...miArray];
console.log('Con Spread Operator',miArrayDos);
//Con Spread Operator [ 'Negro', 'Blanca', 'Amarillo', 'Rojo', 'Azul' ]

const miArrayTres = ['Negro', 'Blanca', miArray];
console.log('Sin Spread Operator',miArrayTres);
//Sin Spread Operator [ 'Negro', 'Blanca', [ 'Amarillo', 'Rojo', 'Azul' ] ]

const arr = [1,2,3];
const arrDos = ['uno','dos','tres'];
const arrFusion = [...arrDos, ...arr];
console.log(arrFusion);
//[ 'uno', 'dos', 'tres', 1, 2, 3 ]


// * SPREAD OPERATOR CON OBJETOS *
const myObj = {
    id:4,
    name: 'Charmander',
    type: 'Fuego',
};

const complementoObj = {
    attack: 'Mordisco',
    type:'Hielo', //Redeclarar un valor existente reemplazara el contenido actual.
};

const miNuevoPokemon = {
    ...myObj,
    ...complementoObj,
};

console.log(miNuevoPokemon);
// { id: 4, name: 'Charmander', type: 'Hielo', attack: 'Mordisco' }


// PROBANDO SOBREESCRIBIR OBJETOS LITERALES ANIDADOS
const Persona = {
    nombre: 'Pedro',
    apellido: 'Gomez',
    direccion: {
        calle: 'Benito Juárez',
        numero: 54,
        colonia: 'Las Américas',
    }
};

const PersonaCorreccion = {
    nombre: 'Pedro',
    apellido: 'Gomez',
    direccion: {
        calle: 'Cristobal Colón',
        numero: 100,
        colonia: '16 de Septiembre',
    }
};

const miPersonaActualizada = {
    ...Persona,
    ...PersonaCorreccion,
};

console.log(miPersonaActualizada);
// {
//     nombre: 'Pedro',
//     apellido: 'Gomez',
//     direccion: {
//       calle: 'Cristobal Colón',
//       numero: 100,
//       colonia: '16 de Septiembre'
//     }
//   }