import React, {useState, useEffect} from 'react';
//import axios from 'axios';
import ApiRequest from '../utils/ApiRequest'
import ShowsList from './ShowsList';
import Header from './Header';

function Home () {
    const UriSearch ='http://api.tvmaze.com/search/shows?q=';
    const [showList, setShowList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    
    const updateFromSearch = (query) => {
        ApiRequest(UriSearch,query,setShowList);
    }

    useEffect(()=>{
        console.log("Ejecución de Use Effect");
        setSearchQuery('Robot');
        ApiRequest(UriSearch,searchQuery,setShowList);
    },[searchQuery]);

    return(
        <div>
            <Header updateData={updateFromSearch}/>
            <h1>Shows</h1>
            {showList.length === 0 ? <h2>Cargando Shows</h2> : <ShowsList shows={showList} />}
        </div>
        )
    


}

export default Home;