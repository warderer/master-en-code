import React from 'react';

function showsList({shows}){
    const renderShows = () => {
        return shows.map((element) => 
            <h4 key={element.show.id}><a href={'/show/'+element.show.id}>{element.show.name}</a></h4>
        )}
    return (
        <div>
            {renderShows()}
        </div>
    )
}

export default showsList;