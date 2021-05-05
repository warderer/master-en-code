import React, { useEffect } from 'react';
import * as d3 from 'd3';

function Bar() {

    useEffect(() => {
        //Aqui nos aseguramos que el componente exista cuando carguemos la gráfica
        console.log('Se ejecuto use effect');
    }, []);

    return(
        <div>Aqui esta bar</div>
    )
}

export default Bar;