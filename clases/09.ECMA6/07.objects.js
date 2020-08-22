const team = {
    "2020-10-03":{
        name:"Edwin",
        edad:27
    },
    "2020-11-04":{
        name:"Raul",
        edad:26
    },
    "2020-04-23":{
        name:"Mali",
        edad:23
    }
};

// Si quisieramos acceder a una propiedad como si fuera un objeto marcaria un error de esta forma:
//console.log(team.1.name);

//La forma correcta en este caso para acceder es:
console.log(team["2020-11-04"].name); // Raul

//PARA PODER ITERAR EN UN ARREGLO DE ESTE TIPO EXISTEN 3 ALERNATIVAS

// #1: KEYS
// Object.keys(objeto). Me regresa en un arreglo los KEYS de mi objeto
console.log("--- #1 KEYS ---");
console.log("Keys--->", Object.keys(team)); //Keys---> [ '2020-10-03', '2020-11-04', '2020-04-23' ]

// Iterando con Keys
const teamKeys = Object.keys(team);
for (let index = 0; index < teamKeys.length; index++) {
    const currentKey = teamKeys[index];
    console.log(team[currentKey].name); // Edwin Raul Mali
}

// #2: VALUES
// Me devuelve un arreglo de solo los valores del Objeto.
console.log("--- #2 VALUES ---");
console.log("Values--->", Object.values(team));
// Values---> [
//     { name: 'Edwin', edad: 27 },
//     { name: 'Raul', edad: 26 },
//     { name: 'Mali', edad: 23 }
//   ]

const teamValues = Object.values(team);
teamValues.forEach((member)=>{ //Usamos un forEach para iterar en sobre el arreglo de Objetos.
    console.log("Miembro del team --->",member.name); //Para cada miembro extraemos el nombre.
});
// Miembro del team ---> Edwin
// Miembro del team ---> Raul
// Miembro del team ---> Mali


// #3 ENTRIES
// Convierte un OBJETO en un Arreglo de Arreglos
console.log("Entries --->", Object.entries(team));
// Entries ---> [
//     [ '2020-10-03', { name: 'Edwin', edad: 27 } ],
//     [ '2020-11-04', { name: 'Raul', edad: 26 } ],
//     [ '2020-04-23', { name: 'Mali', edad: 23 } ]
//   ]

const teamEntries = Object.entries(team);

for (const entry of teamEntries){
    const numMember = entry[0];
    const member = entry[1];
    // const [numMember, member] = entry; //Lo mismo que lo anterior, pero con Destructuring
    console.log(`El miembro Num: ${numMember} es ${member.name}`);
    // El miembro Num: 2020-10-03 es Edwin
    // El miembro Num: 2020-11-04 es Raul
    // El miembro Num: 2020-04-23 es Mali
}