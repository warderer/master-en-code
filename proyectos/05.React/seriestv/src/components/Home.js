import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ShowsList from './ShowsList';

function Home () {
    const UriSearch ='http://api.tvmaze.com/search/shows?q=';
    const [showList, setShowList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const getApiData = (query) => {
        axios.get(UriSearch+query)
        .then((result)=>{
            //console.log(result);
            setShowList(result.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        console.log("Ejecución de Use Effect");
        setSearchQuery('Robot');
        getApiData(searchQuery);
        console.log(showList);
    },[]);

    return(
        <div>
            <h1>Shows</h1>
            {showList.length === 0 ? <h2>Cargando Shows</h2> : <ShowsList shows={showList} />}
            
        </div>
        )
    


}

export default Home;