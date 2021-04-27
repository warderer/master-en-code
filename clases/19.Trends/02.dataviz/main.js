//
// ** 01. Ver el contenido de D3 **
//
console.log('D3',d3);

//
// ** 02. Cambiar el color de fondo del body **
//
d3.select('body').style('background-color','pink')


// Cambiar de color los parrafos
// d3
//     .select('body')
//     .selectAll('p')

//
//  ** 03. Cambiar el color de cada parrafo de forma aleatoria **
//

// El segundo parametro puede ser un callback
d3.selectAll('p').style('color',() => {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
});


//
// ** 04. Iterar y traer los datos en pantalla **
//
const dataSet = [3,5,6,8,10,30];

d3
    .select('body') // Selecciona el Body
    .selectAll('h3') // Selecciona todos los h3
    .data(dataSet) // La info con la que D3 va a trabajar
    .enter() // Prepara la vinculación entre el dataSet y el append
    .append('h3') //Por cada elemento en un dataset, crea un H3
    .text((d)=>{ // d representa el dato que se esta iterando del dataset
        return `Soy el número ${d}`; // el return inserta el texto al h3
    });


//
// ** 05. Comenzando a Gráficar **
//
const paises = [
    { nombre : 'mexico', porcentaje : 875, color : 'green'},
    { nombre : 'colombia', porcentaje : 763, color : 'yellow'}
];

d3
    .select('body')
    .selectAll('div')
    .data(paises)
    .enter()
    .append('div')
    .style('height', '40px')
    .style('margin-bottom','10px')
    .style('background', (d) => {
        return d.color;
    })
    .style('width', (d) => {
        return `${d.porcentaje}px`;
    })
    .text((d) => {
        return `${d.nombre} ${d.porcentaje}`;
    })

//
// ** 06. Funciones Utiles para Arreglos **
//
const datosRandom = [21,43,12,46,35,67,99,34,87,1];

// Suma todos los datos
console.log(d3.sum(datosRandom)); // -> 445

// Obtener el elemento máximo del arreglo
console.log(d3.max(datosRandom)); // -> 99

// Obtener el elemento múnimo del arreglo
console.log(d3.min(datosRandom)); // -> 1

// Obtener mínimo y máximo del arreglo
console.log(d3.extent(datosRandom)); // Array -> [1, 99]

// Obtener promedio
console.log(d3.mean(datosRandom)); // -> 44.5

// Crear un rango
console.log(d3.range(1,11)); // -> [1,2,3,4,5,6,7,8,9,10]

// Crear un rango con pasos (cada x veces)
console.log(d3.range(1,11, 2)); // -> [1,3,5, 7, 9]


//
// ** 07. Actividad 10 mins **
// Escribir en un parrafo las respuestas de las funciones anteriores
//
d3
    .select('body') // Selecciona el Body
    .append('p') // Creo un elemento p dentro de body
    .html(()=>{ // Inserto HTML dentro de p
        return `
            La suma de todos los números es: ${d3.sum(datosRandom)} <br>
            El número máximo del arreglo es: ${d3.max(datosRandom)} <br>
            El número mínimo del arreglo es: ${d3.min(datosRandom)} <br>
            El número mínimo es ${d3.extent(datosRandom)[0]} y el máximo ${d3.extent(datosRandom)[1]} <br>
            El promedio de datos es ${d3.mean(datosRandom)} <br>
            El Rango es ${d3.range(1,11)}
        `;
    });