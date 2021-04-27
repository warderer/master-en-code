console.log('D3',d3);

// Cambiar el color de fondo del body
d3.select('body').style('background-color','pink')

// Cambiar de colro los parrafos
// d3
//     .select('body')
//     .selectAll('p')

// Cambiar el color de cada parrafo de forma aleatoria
// El segundo parametro puede ser un callback
d3.selectAll('p').style('color',() => {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
});

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
// ** Comenzando a Gráficar **
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