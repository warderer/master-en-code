import React, { useContext, useState } from 'react';
import { itemsApi } from '../services/api';

const ProductsContext = React.createContext(undefined);

function ProductsProvider(props){
    const [products, setProducts] = useState(null);
    const [productsIsFetching, productsSetIsFetching] = useState(false);
    const [productsIsError, productsSetIsError] = useState(false);

    const getProducts = async () =>{
        productsSetIsFetching(true);
        try {
            const data = await itemsApi.getAllItems();
            setProducts(data);
            productsSetIsFetching(false);
        } catch (error) {
            productsSetIsError(error);
            productsSetIsFetching(false);
        }
    };

    const getProductos = () => {return products}

    const state = [
        {
            products, productsIsFetching, productsIsError,
        },
        {
            getProducts, getProductos
        }
    ];

    return (
        <ProductsContext.Provider value={state} {...props}/>
    )
}

// Consumidor del contexto
const useProductsContext = () => {
    const context = useContext(ProductsContext);
    if (context === undefined) {
        throw new Error('useProductsContext can only be used inside ProductsContext');
    }
    return context;
}

export {
    ProductsProvider,
    useProductsContext
}