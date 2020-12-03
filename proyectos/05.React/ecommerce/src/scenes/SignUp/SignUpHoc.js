import React from 'react';
import axios from 'axios';

export default (SignUp) => function SignUpHoc() {
    const sendData = (data) => {
        axios.post("https://ecomerce-master.herokuapp.com/api/v1/signup", data)
            .then((response)=>{
                if(response.status === 201) {
                    console.log(response.data);
                    //history.push('/');
                }
            })
            .catch((error)=>{
                alert(error.response.data.message);
            })
    }

    return(
        <SignUp sendData={sendData}/>
    )
}