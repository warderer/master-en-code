import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import PropTypes from 'prop-types';
import useForm from '../../hooks/useForm';

function Login({sendData}) {

    const { inputs, handleInputChange, handleSubmit } = useForm(sendData,{});

    return (
        <React.Fragment>
            <NavigationBar />
            <h1>Login Page</h1>

            <form onSubmit={handleSubmit}>
                <div className="cointainer">
                    <div className="row justifiy-content-center">
                        <div className="col-md-10">
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    value={inputs.email || ""}
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
                                    value={inputs.password || ""}
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
        </React.Fragment>
    )
}

Login.propTypes = {
    sendData: PropTypes.func
}

export default Login;