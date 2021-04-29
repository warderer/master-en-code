//
// ** Día 02 - Manipulación de CSV **
//

//
// ** 01. Cargar un CSV: Forma #1 **
// Devuelve el resultado 1 por 1
// Nota: Preferentemente abrir con Servidor Web (ej: Live server)
//
d3.csv('CausasDeMortalidadDF2013.csv', (d) => {
    console.log(d);
});

//
// ** 02. Cargar un CSV: Forma #2 **
// Devuelve un arreglo con todos los elementos
// Nota: Preferentemente abrir con Servidor Web (ej: Live server)
//

d3.csv('CausasDeMortalidadDF2013.csv')
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });

//
// ** 03. Ejercicio: **
// Con los datos del CSV, crear una gráfica de barras
// mostrando la causa de muertes
//

d3.csv('CausasDeMortalidadDF2013.csv')
    .then((result) => {
        d3
        .select('#grafica') // Selecciona el Body
        .selectAll('div')
        .data(result) // La info con la que D3 va a trabajar
        .enter() // Prepara la vinculación entre el dataSet y el append
        .append('div') //Por cada elemento en un dataset, crea un H3
            .style('height', '40px')
            .style('margin-bottom','10px')
            .style('background',() => {
                return "hsl(" + Math.random() * 360 + ",100%,50%)";
            })
            .style('width', (d) => {
                return `${(d.Defunciones / 10) }px`;
            })
        .text((d)=>{ // d representa el dato que se esta iterando del dataset
            return `${d.Causas} - ${d.Defunciones}`; // el return inserta el texto al h3
        });
    }).catch((err) => {
        console.log(err);
    });


//
// ** 04. Escalas **
// Range: Conjunto de valores resultantes de la función
// Domain: Conjunto de los valores (menor y mayor)
//

const escalaLinear = d3.scaleLinear()
    .range([0, 100]) // Valores representativos de la escala (se representa en la gráfica)
    .domain([0, 2000]); // Valor minimo y máximo

// Las escalas ordinales se utilizan para datos categoricos (que catalogan)
// Siempre respetan el orden (posicion de range vs domain)
const escalaOrdinal = d3.scaleOrdinal()
    .range(['purple','versicolor'])
    .domain(['setosas'],['versicolor'])

// Segmenta el rango entre el número de elementos del dominio.
const escalaDeBanda = d3.scaleBand()
    .range([0,100])
    .domain('domingo','lunes','martes','miercoles','jueves','viernes','sabado')

//
// ** 05. Escalas Aplicado a Gráficos **
// Range: Conjunto de valores resultantes de la función
// Domain: Conjunto de los valores (menor y mayor)
//
d3.csv('CausasDeMortalidadDF2013.csv')
    .then((result) => result.map((r) => ({ nombre: r.Causas, muertes: parseInt(r.Defunciones) })))
    .then((data)=>{
        console.log('--- Escalas ---');

        //Vamos a ordenar el arreglo
        data.sort((a,b) => a.muertes > b.muertes ? -1 : 1);
        console.log(data);

        //Vamos a escalar linealmente
        const maxMuertes = d3.max(data, (d) => d.muertes );
        const linear = d3.scaleLinear()
            .range([0, 1000])
            .domain([0, maxMuertes]);

        //Colores escala linear de Amarillo a Rojo
        const escalaLinearColor = d3.scaleLinear()
            .range([50, 0])
            .domain([0, maxMuertes]);

        //Colores especificando color y Rangos
        const escalaLinearColorFijo = d3.scaleLinear()
            .range(['blue','green','yellow','red'])
            .domain([0, maxMuertes / 4, maxMuertes / 2, maxMuertes])

        d3
            .select('#rangos')
            .selectAll('section')
            .data(data)
            .enter()
            .append('section')
                .style('width', (d) => `${linear(d.muertes)}px`)
                .style('background', (d)=>{
                    return escalaLinearColorFijo(d.muertes)
                    //return `hsl(${escalaLinearColor(d.muertes)},100%,50%)`
                })
                .style('height', '40px')
                .style('margin-bottom','3px')
                .text((d) => d.muertes)

    }).catch((err)=>{
        console.log(err);
    })