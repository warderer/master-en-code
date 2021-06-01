//import React from 'react';
import * as d3 from 'd3';
import { useRef, useState, useEffect } from 'react';

function BarChart({data}){
    const [dataSet, setDataset] = useState(data)
    console.log('data',data)
    const chartRefX = useRef();
    const chartRefY = useRef();

    const width = 800;
    const height = 500;
    const margin = { top:20, right: 20, bottom:40, left: 45 }
    const yScale = d3.scaleBand()
        .range([ 0, height ])
        .domain( data.map (d => d.name))
        .paddingInner(0.1)

    const xScale = d3.scaleLinear()
        .range([0, width])
        .domain([0, d3.max(data, d => d.age) ])

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

useEffect(()=>{
    //const svgElement = d3.select(chartRef.current)
    console.log('ChartRef',d3.select(chartRefX))
     d3
         .select(chartRefX)
    //     .call(xScale)
    // d3.select(chartRef.yAxis).scale(yScale)        // Axis ayuda a definir los ejes
    // const xAxis = d3.axisBottom(scalaX);
    // const yAxis = d3.axisLeft(scalaY);
},[])


    return (
        <svg width={width} height={height}>
            {
                data.map((d) => {
                    return (
                        <rect
                            x={0}
                            y={yScale(d.name)}
                            width={xScale(d.age)}
                            height={yScale.bandwidth()}
                            fill={'steelblue'}
                            style={{}}
                        />
                    )
                })
            }

            <g>
                <g ref={chartRefX} transform={`translate(0, ${margin.top})`}/>
                <g ref={chartRefY} transform={`translate(${margin.left},0)`}/>
            </g>

        </svg>
    );
}

export default BarChart;