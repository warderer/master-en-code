// Reglas de React
// 1. Por convención, los nombres de archivo de Componentes empiezan en Mayúscula.
// 2. Siempre mandar a importar la depenencia de react: import React from 'react'
// 3. La clase/función debe llamarse igual que el archivo.

import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    //state = {}  :Solo si no tengo constructor.

    constructor(props){
        super(props);
        this.state = {
            count: props.initCount //Count es el valor inicial de mi contador
        }
        //El state se va a encargar de modificar el DOM por mi.
        //React detecta cambios en el state y los pone en la UI.
    }

    render(){ //Hereda de la clase Component
        //Render sirve para mostrar el HTML que va a llevar el Componente.
        // JSX no reconoce class como atributo de HTML, este lo cambia a className
        return (
            <div className="counter-main">
                <h5>{this.state.count}</h5> {/* Las llaves en JSX representan código de JS*/}
                <div className="counter-buttons">
                    {/* this.setState es el único que puede cambiar el estado */}
                    <button
                        onClick={()=> this.setState({count: this.state.count+1})}
                    >
                        Agregar
                    </button>

                    <button
                        onClick={()=> this.setState({count: this.state.count-1})}
                    >
                        Disminuir
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter;