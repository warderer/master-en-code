import React from 'react';

class SearchBar extends React.Component{

    render(){
        return(
            <div className="search-bar">
                <input
                    placeholder="¿Qué buscas?"
                    name="search"
                    className="search-input"
                />
                <button className="search-button">Buscar </button>
            </div>
        )
    }
}

export default SearchBar;