import React from 'react';

const SingleProductCard = (SingleProductCard) => function SingleProductCardHoc({...props}){
    const {product} = props;
    return (
        <SingleProductCard
            id={product._id}
            productName={product.product_name}
            description={product.description}
            price={product.price}
            category={product.category}
            brand={product.brand}
            image={product.image}
        />
    )
}

export default SingleProductCard;