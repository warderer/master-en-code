import React from 'react';

function Search({ value, onChange, text }) {
    return (
        <div>
            <label htmlFor="search">{text}</label>
            <input
                data-testid="search"
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Search;