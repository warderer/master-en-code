import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ApiRequest from '../utils/ApiRequest'

function SingleShowView() {
    const params = useParams();
    const ShowApiUri = 'http://api.tvmaze.com/shows/';
    const [singleShow, setSingleShow] = useState({}); /* /shows/:id */
    const [episodes, setEpisodes] = useState([]); /* /shows/:id/episodes */
    const [cast, setCast] = useState([]);  /* /shows/:id/cast */
    
    useEffect(()=>{
        console.log("Ejecución de Use Effect");
        ApiRequest(ShowApiUri, params.idShow, setSingleShow);
        ApiRequest(ShowApiUri, params.idShow+'/episodes', setEpisodes);
        ApiRequest(ShowApiUri, params.idShow+'/cast', setCast);
    },[]);

    return (
        <div>
            <h1> {`This is a View for the Show ID: ${params.idShow}`}</h1>
            {Object.entries(singleShow).length === 0 ? <h2>Cargando información...</h2> : <h2>{singleShow.name}</h2> }
            {Object.entries(episodes).length === 0 ? <h4>Cargando información...</h4> : episodes.map((episode,index)=><h4 key={index}>{episode.name}</h4>) }
            {Object.entries(cast).length === 0 ? <p>Cargando información...</p> : cast.map((actor,index)=> <p key={index}>{actor.person.name}</p>) }
        </div>
    )
}

export default SingleShowView;