import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Home () {
    const UriSearch ='http://api.tvmaze.com/search/shows?q=';
    // eslint-disable-next-line no-unused-vars
    const [showList, setShowList] = useState([]);

    const getApiData = (query) => {
        axios.get(UriSearch+query)
        .then((result)=>{
            console.log(result);
            setShowList(result);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        console.log("Ejecución de Use Effect");
        getApiData("I Robot");
    },[]);

    return(
        <div>
            <h1>Hola</h1>
        </div>
        )
    


}

export default Home;