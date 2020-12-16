import React from 'react';
import PropTypes from 'prop-types';
import SingleProductCard from '../../components/SingleProductCard';

function Home({products}) {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">X-MAS DISCOUNTS</h1>
                    <p className="lead">Hurry while stocks last</p>
                </div>
            </div>
            <div className="d-flex justify-content-center flex-wrap align-items-stretch">
                {products?.length === 0 ? <h2>Cargando Productos</h2> : products?.map((item, index) => <SingleProductCard key={index} product={item} />)}
            </div>
        </div>
    )
}

Home.propTypes = {
    products: PropTypes.array,
}

export default Home;