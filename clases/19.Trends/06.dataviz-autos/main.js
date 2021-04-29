//

d3.csv('AutosVendidosFeb2016.csv')
    .then((result) => result.map((d) => ({ 
        name: d.GRUPO,
        quantity: parseInt(d.CANTIDAD)
    })))
    .then((data) => {
        const charWidth = 1900;
        const charHeight = 600;

        // Ordeno la información de mayor a menor
        data.sort((a,b) => a.quantity > b.quantity ? -1 : 1);
        console.log(data);

        const margin = { top:20, right: 20, bottom:40, left: 45}

        const width = charWidth - margin.right - margin.left;
        const height = charHeight - margin.top - margin.bottom;

        const maxQuantity = d3.max(data, (d) => d.quantity);

        const scalaY = d3.scaleLinear()
            .range([ height, 0 ])
            .domain([ 0, maxQuantity ]);

        const scalaX = d3.scaleLinear()
            .range([ 0, width ])
            .domain(data.map(d => d.name))

        // Axis ayuda a definir los ejes
        const xAxis = d3.axisBottom(scalaX);
        const yAxis = d3.axisLeft(scalaY);

        const svg = d3
            .select('#autos')
            .append('svg')
            .attr('width', charWidth)
            .attr('height',charHeight)
            .append('g') // g nos indica que vamos a agregar un grupo
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        svg
            .append('g')
            .attr('class', 'y axis')
            .call(yAxis)

        svg
            .append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0, ' + height + ') ')
            .call(xAxis)

        const rect = svg.selectAll('#autos')
            .data(data)
            .enter()
                .append('rect')
                .attr('x', function (d) { return scalaX(d.name); })
                .attr('width', scalaX.bandwidth()) // Ancho de la barra
                .attr('y', function (d) { return scalaY(d.quantity); })
                .attr('height', function (d) { return height - scalaY(d.quantity); })
                .attr('fill', 'steelblue');

        const tip = d3.tip().attr('class', 'd3-tip').html(function(event,d) {
            return JSON.stringify(d);
        });

        svg.call(tip); // Llamar la inicialización del tip

        rect
            .on('mouseover.tip', tip.show)
            .on('mouseout.tip',  tip.hide)
            .on('mouseover', function(d) {
                d3.select(this).attr('fill', 'red');
            })
            .on('mouseout', function() {
                d3.select(this).attr('fill', 'steelblue');
            })

    }).catch((err) => {
        console.log(err);
    });