import React, { useEffect } from 'react';
import { ProductsContext } from '../../context';

export default (Home) => function HomeHoc() {

    const [{ products, productsIsFetching, productsIsError, }, { getProducts }] = ProductsContext.useProductsContext();

    useEffect(() => {
        getProducts();
    }, []);

    const bannerInfo = {
        title: 'X-MAS DISCOUNTS',
        subtitle: 'Hurry while stocks last'
    }

    const renderContent = () => {
        if (productsIsFetching) {
            return (
                <Home products={[]} banner={bannerInfo} />
            )
        }
        if (productsIsError) {
            return <h1>{productsIsError}</h1>
        }
        if (products) {
            return (
                <Home products={products} banner={bannerInfo} />
            )
        }
        return null;
    }

    return (
        renderContent()
    )
}