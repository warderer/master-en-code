import React from 'react';

class SearchBar extends React.Component{

    state = {
        search: "",
    }

    // this.state --> Para manejar el estado INTERNO del componente.
    // this.props --> Para manejar las propiedades qeu nos pasa el componente padre.

    render(){
        return(
            <div className="search-bar">
                <input
                    placeholder="¿Qué buscas?"
                    name="search"
                    className="search-input"
                    onChange={(event)=> {
                        // Se ejecuta cada vez que el usuario modifica algo en el input
                        // onChange recibe un callback con el evento y así saber el valor
                        this.setState({search: event.target.value})
                    }}
                />
                <button
                    className="search-button"
                    /* Se usa una función anonomima para que tenga el control de ejecución y esta solo ocurra en el evento de clic*/
                    onClick={() => this.props.emitSearch(this.state.search)}
                >Buscar
                </button>
            </div>
        )
    }
}

export default SearchBar;