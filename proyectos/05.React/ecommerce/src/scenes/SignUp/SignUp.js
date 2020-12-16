import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../../hooks/useForm';

function SignUp ({sendData}) {

    const { inputs, handleInputChange, handleSubmit } = useForm(sendData,{});

    return(
        <React.Fragment>
            <h1>SignUp Page</h1>

            <form onSubmit={handleSubmit}>
                <div className="cointainer">
                    <div className="row justifiy-content-center">

                        <div className="col-md-10">
                            <div className="form-group">
                                <label htmlFor="">First Name</label>
                                <input type="text"
                                    name="first_name"
                                    className="form-control"
                                    value={inputs.first_name || ""}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="col-md-10">
                            <div className="form-group">
                                <label htmlFor="">Last Name</label>
                                <input type="text"
                                    name="last_name"
                                    className="form-control"
                                    value={inputs.last_name || ""}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

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

SignUp.propTypes = {
    sendData: PropTypes.func
}

export default SignUp;