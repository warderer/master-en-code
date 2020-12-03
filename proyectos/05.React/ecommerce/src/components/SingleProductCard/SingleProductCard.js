import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './singleproductcard.scss';

function SingleProductCard({
    id,
    productName,
    description,
    price,
    category,
    brand,
    image,
}) {
    return (
        <React.Fragment>
            <div className="productCardContainer">
                <div className="productCardContent">
                    <div className="productCardImage">
                        <img src={image} alt="" />
                        <Link to={"/product?"+id} className="imageCardEffect">
                            Product
                        </Link>
                    </div>
                    <div className="productCardDetails">
                        <div className="productCardModel">
                            <span className="modelCardEffect"></span>
                            <Link to={"/product?"+id}>
                                {productName}
                                <span>Price: $ {price}</span>
                            </Link>
                        </div>
                        <div className="productCardDetailsList">
                            <div className="list-group">
                                <div className="list-group-item">
                                    <span className="detailInfo">{description.length>=58 ? description.substring(0,58)+"...": description}</span>
                                </div>
                                <div className="list-group-item">
                                    <span className="detailInfo">
                                        Brand: {brand}
                                    </span>
                                    <span className="detailInfo">
                                        Category: {category}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="productCardPrice">
                            <Link to={"/product?"+id} className="btn">
                                <i className="fa fa-info"></i> More Details
                            </Link>
                            <button className="btn addToCart">
                                <i className="fa fa-shopping-cart"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

SingleProductCard.propTypes = {
    id: PropTypes.string,
    productName: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    brand: PropTypes.string,
    image: PropTypes.string,
};

export default SingleProductCard;
