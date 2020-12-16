import React from 'react';
import './error404.scss';
import { Link } from 'react-router-dom';

function Error404() {
    return (
        <React.Fragment>
            <div id="ZeroFourZero">
                <div className="title-404-container">
                <h1>Wooops! An Error Ocurred.</h1>
                <h4>Try to Return <Link to="/">Home</Link></h4>
                </div>
                <div className="stage">
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                    <div className="layer"></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Error404;