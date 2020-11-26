/* eslint-disable react/prop-types */
import React from 'react';

function ShowGeneralInfo({showData}) {
    return (
        <div>
            <h2>{showData.name}</h2>
            <img src={showData.image.medium}></img>
            <p dangerouslySetInnerHTML={{
                __html: showData.summary
            }}/>
            <p>Genres: {showData.genres.map((genre, index)=><span key={index}>{genre} </span>)}</p>
            <span className="App-link"> Runtime:</span> {showData.runtime } 
            <span className="App-link"> Premiered:</span> {showData.premiered} 
            <span className="App-link"> Rating:</span> {showData.rating.average} 
            <span className="App-link"> Status:</span> {showData.status} 
            <span className="App-link"> Language:</span> {showData.language}
        </div>
    )
}

export default ShowGeneralInfo;