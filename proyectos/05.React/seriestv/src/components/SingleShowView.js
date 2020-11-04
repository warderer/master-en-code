import React from 'react';
import {useParams} from 'react-router-dom';

function SingleShowView() {
    const params = useParams();
    console.log(params);
    return (
        <div>

            <h1> {`This is a View for the Show ID: ${params.idShow}`}</h1>
        </div>
    )
}

export default SingleShowView;