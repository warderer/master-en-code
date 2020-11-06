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
            <span>Runtime: {showData.runtime} </span>
            <span>Premiered: {showData.premiered} </span>
            <span>Rating: {showData.rating.average} </span>
            <span>Status: {showData.status} </span>
            <span>Language: {showData.language}</span>
        </div>
    )
}

export default ShowGeneralInfo;