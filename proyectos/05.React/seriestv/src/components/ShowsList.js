import React from 'react';
import {Link} from 'react-router-dom';

function showsList({shows}){
    const renderShows = () => {
        return shows.map((element) => 
            <h4 key={element.show.id}><Link to={'/show/'+element.show.id}>{element.show.name}</Link></h4>
        )}
    return (
        <div>
            {renderShows()}
        </div>
    )
}

export default showsList;