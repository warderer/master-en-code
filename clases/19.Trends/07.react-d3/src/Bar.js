import React, { useEffect } from 'react';
import * as d3 from 'd3';

function Bar() {
    const dataSet = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13 ];
    const width = 800;
    const height = 500;

    useEffect(() => {
        //Aqui nos aseguramos que el componente exista cuando carguemos la gráfica
        const svg = d3
            .select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)

        svg
            .selectAll("rect")
            .data(dataSet)
            .enter()
            .append("rect")
            .attr("width", 50)
            .attr("height",(d)=>{
                return d;
            })
            .attr("x", (d, i) => {
                return (i + 1) * (width / dataSet.length);
            })
            .attr("y",(d) => {
                return height - d;
            })

        // 10 minutos para crear una grafica de barras sencilla
    }, []);

    return(
        <div>Aqui esta bar</div>
    )
}

export default Bar;