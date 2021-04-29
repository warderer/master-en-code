// Ref: Building Shapes in D3
// https://www.d3-graph-gallery.com/graph/shape.html

//
// ** 01. Creación de un SVG Circular **
//
const svg = d3
    .select('#circulos')
    .append('svg')
    .attr('width', '500px')

    const data = ['Circulo 1', 'Circulo 2'];

    svg
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
            .attr('cx', (d,i) => { // d es la data e i la iteración
                return 200 * (i + 1) //desplazamos cada circulo en x
            })
            .attr('cy', 70) //circle y = cy
            .attr('r', 65) // r = radio
            .attr('fill', 'purple')
            .attr('stroke','black')
            .attr('id', (d) => d.replace(' ', '-'))
            .style('stroke-width', 5)

//
// ** 02. Creación de un SVG Cuadrado **
//

const dataRect = ['Rectangulo 1', 'Rectangulo 2'];

d3
    .select('#cuadrados')
    .append('svg')
    .attr('width', '500px')
    .selectAll('rect')
    .data(dataRect)



//
// ** 03. Eventos **
//

svg.select('#Circulo-1') //Seleccionar elemento a agregar un evento
    .on('click', (e, d) => { // Escuchar un evento on y devolver el callback
        console.log(e);
        console.log(d);
        alert(`Le diste clic a: ${d}`)
    });

svg.select('#Circulo-2')
    .on('mouseover', (d) => { // Cambia de color al pasar el mouse
        console.log(d);
        svg.select('#Circulo-2')
            .style('fill','yellow')
    })
    .on('mouseleave', (d) => { // Cambia de color al salir
        console.log(d);
        svg.select('#Circulo-2')
            .style('fill','purple')
    })