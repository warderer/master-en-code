import React from 'react';
import useForm from '../hooks/useForm';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

function Login() {

    let history = useHistory();
    const sendData = (data) => {
        axios.post("http://ca35951931f4.ngrok.io/login", data)
            .then((response)=>{
                console.log(response.data);
                //session.storage: Se guarda hasta que se cierra la pestaña
                //local.storage: Se almacena aunque se cierre el navegador
                window.localStorage.setItem("token", response.data.token) //esto agrega algo nuevo a local Storage
                history.push('/');
            })
            .catch((error)=>{
                alert(error.response.data.message);
            })
    }

    const { inputs, handleInputChange, handleSubmit } = useForm(sendData,{});

    return(
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div className="cointainer">
                    <div className="row justifiy-content-center">

                        <div className="col-md-10">
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    value={inputs.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="col-md-10">
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password"
                                    name="password"
                                    className="form-control"
                                    value={inputs.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="col-md-10 text-center">
                                <button type="submit" className="btn btn-dark">Enviar</button>
                        </div>           

                    </div>
                </div>

            </form>
        </div>
    )
}

export default Login;