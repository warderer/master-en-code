import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default (Login) => function LoginHoc(){
    let history = useHistory();
    const sendData = (data) => {
        axios.post("https://ecomerce-master.herokuapp.com/api/v1/login", data)
            .then((response)=>{
                console.log(response.data);
                window.localStorage.setItem("token", response.data.token);
                history.push('/');
            })
            .catch((error)=>{
                alert(error.response.data.message);
            })
    }

    return(
        <Login sendData={sendData} />
    )
}