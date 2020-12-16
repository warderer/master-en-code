import React, { useEffect, useState } from 'react';
import itemsApi from '../../services/api';

export default (Home) => function HomeHoc() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () =>{
        const data = await itemsApi.getAllItems();
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return(
        <Home products={products}/>
    )
}