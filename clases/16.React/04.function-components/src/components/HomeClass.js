import React from 'react';

class Home extends React.Component {
    constructor(){
        super();
        this.perfil = null
    }

    componentDidMount(){
        // Se ejecuta cuando termina de renderear
        // Deben ir las peticiones a las APIs que deban ser cargadas automaticamente.
        console.log('componentDidMount');
        setTimeout(()=> {
            this.setState({
                perfil: {
                    name: 'Mario Bros'
                }
            })
        },5000);
    }

    componentWillMount() {
        // componentWillMount ya no se ocupa por que puede ocasionar un cuello de botella
        // Se ejecuta antes de que exista algo en mi página.
        console.log('componentWillMount');
    }
    
    render() {
        console.log('Render');
        return (
            <div>
                <h1>El home</h1>
                {this.perfil === null ? <h1>No hay perfil</h1> : <h1>Ya existe un perfil</h1>}
            </div>
        )
    }
}
export default Home;