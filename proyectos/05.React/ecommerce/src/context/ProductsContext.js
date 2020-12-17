import React, { useContext, useState } from 'react';
import { itemsApi } from '../services/api';

const ProductsContext = React.createContext(undefined);

function ProductsProvider(props){
    const [products, setProducts] = useState(null);
    const [productsIsFetching, productsSetIsFetching] = useState(false);
    const [productsIsError, productsSetIsError] = useState(false);

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedProductIsFetching, selectedProductSetIsFetching] = useState(false);
    const [selectedProductIsError, selectedProductSetIsError] = useState(false);

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

    const getSelectedProduct = async (productId) =>{
        selectedProductSetIsFetching(true);
        try {
            const data = await itemsApi.getOneItem(productId);
            setSelectedProduct(data);
            selectedProductSetIsFetching(false);
        } catch (error) {
            selectedProductSetIsError(error);
            selectedProductSetIsFetching(false);
        }
    }

    const state = [
        {
            products, productsIsFetching, productsIsError, selectedProduct, selectedProductIsFetching, selectedProductIsError,
        },
        {
            getProducts,
            getSelectedProduct,
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