/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './product.scss';

function Product({id, productName, description, price, category, brand, image, sku, createdAt, editedAt, isActive}) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="card">
                    <div className="row">
                        <aside className="col-sm-5 border-right">
                            <article className="gallery-wrap">
                                <div className="img-big-wrap">
                                    <div>
                                        <img src={image} />
                                    </div>
                                </div>
                            </article>
                        </aside>

                        <aside className="col-sm-7">
                            <article className="card-body p-5">
                                <h3 className="title mb-3">{productName}</h3>

                                <p className="price-detail-wrap">
                                    <span className="price h3 text-warning">
                                        <span className="currency">$</span><span className="num">{price}</span>
                                    </span>
                                    <span> MXN</span>
                                </p>
                                <dl className="item-property">
                                    <dt>Description</dt>
                                    <dd><p>{description}</p></dd>
                                </dl>
                                <dl className="param param-feature">
                                    <dt>Brand</dt>
                                    <dd>{brand}</dd>
                                </dl>
                                <dl className="param param-feature">
                                    <dt>Sku</dt>
                                    <dd>{sku}</dd>
                                </dl>
                                <dl className="param param-feature">
                                    <dt>Category</dt>
                                    <dd>{category}</dd>
                                </dl>

                                <hr />
                                <div className="row">
                                    <div className="col-sm-5">
                                        <dl className="param param-inline">
                                            <dt>Quantity: </dt>
                                            <dd>
                                                <select className="form-control form-control-sm" style={{width: "70px"}}>
                                                    <option> 1 </option>
                                                    <option> 2 </option>
                                                    <option> 3 </option>
                                                </select>
                                            </dd>
                                        </dl>
                                    </div>

                                </div>
                                <hr />
                                <div className="btn btn-lg btn-primary text-uppercase mr-4"> Buy now </div>
                                <div className="btn btn-lg btn-outline-primary text-uppercase"> <i className="fa fa-shopping-cart"></i> Add to cart </div>
                            </article>
                        </aside>
                    </div>
                </div>


            </div>


        </React.Fragment>
    )
}

Product.propTypes = {
    id: PropTypes.string,
    productName: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    brand: PropTypes.string,
    image: PropTypes.string,
    sku: PropTypes.string,
    createdAt: PropTypes.string,
    editedAt: PropTypes.string,
    isActive: PropTypes.bool
}

export default Product;