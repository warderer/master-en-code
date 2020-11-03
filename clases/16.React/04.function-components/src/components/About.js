import React from 'react'
import { useHistory } from 'react-router-dom';

function About(){
    const history = useHistory();

    return(
        <React.Fragment>
            <h2>Este es el componente About</h2>
            <button onClick={()=>{
                history.push('/');
            }}>Nos vamos al Home</button>
        </React.Fragment>
    )
}

export default About;