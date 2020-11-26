import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useForm from '../hooks/useForm';
import axios from 'axios';

function Signup () {
    let history = useHistory();
    const sendData = (data) => {
        if (data.password === data.password_confirm){
            delete data.password_conform;
            axios.post("http://ca35951931f4.ngrok.io/signup", data)
                .then((response) => {
                    if(response.status === 201) {
                        //Cuando se crea el usuario, lo regresamos al Login
                        console.log(response.status);
                        history.push('/');
                        
                    }
                })
                .catch((error)=>{
                    alert(error.response.data);
                })
        } else {
            alert("Password no coinciden");
        }
        
        console.log(data)
    }

    const { inputs, handleInputChange, handleSubmit } = useForm(sendData,{})

    return(
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label htmlFor="">Nombre</label>
                                <input type="text"
                                    value={inputs.first_name}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    name="first_name"
                                    id="first_name"
                                />
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="form-group">
                                <label htmlFor="">Apellidos</label>
                                <input type="text" 
                                    value={inputs.last_name}
                                    onChange={handleInputChange}
                                    className="form-control" 
                                    name="last_name" 
                                    id="last_name" 
                                />
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                    <input type="email" 
                                        value={inputs.email}
                                        onChange={handleInputChange}
                                        className="form-control" 
                                        name="email" 
                                        id="email" 
                                    />
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password"
                                    value={inputs.password}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    name="password"
                                    id="password" 
                                />
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="form-group">
                                <label htmlFor="">Confirmar password</label>
                                <input type="password" 
                                    value={inputs.password_confirm}
                                    onChange={handleInputChange}
                                    className="form-control" 
                                    name="password_confirm" 
                                    id="password_confirm" 
                                />
                            </div>
                        </div>

                        <div className="col-md-12 text-center">
                            <button type="submit" className="btn btn-dark">Enviar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
    
}

export default Signup;