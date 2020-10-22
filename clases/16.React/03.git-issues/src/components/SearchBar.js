import React from 'react';

class SearchBar extends React.Component{

    state = {
        search: "",
    }

    render(){
        return(
            <div className="search-bar">
                <input
                    placeholder="¿Qué buscas?"
                    name="search"
                    className="search-input"
                    onChange={(event)=> {
                        this.setState({search: event.target.value})
                    }}
                />
                <button
                    className="search-button"
                    onClick={() => this.props.emitSearch(this.state.search)}
                >Buscar
                </button>
            </div>
        )
    }
}

export default SearchBar;