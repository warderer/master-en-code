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
})