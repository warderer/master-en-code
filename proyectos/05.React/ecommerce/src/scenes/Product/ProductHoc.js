import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import itemsApi from '../../services/api';

export default (Product) => function ProductHoc(){
    const params = useParams();
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        itemsApi.itemsApi.getOneItem(params.idProduct,setSingleProduct);
    }, [])

    return(
        <Product
            id = {singleProduct._id || ""}
            productName = {singleProduct.product_name || ""}
            description = {singleProduct.description || ""}
            price = {singleProduct.price || 0}
            category = {singleProduct.category || ""}
            brand = {singleProduct.brand || ""}
            image = {singleProduct.image || ""}
            sku = {singleProduct.sku || ""}
            createdAt = {singleProduct.createdAt || ""}
            editedAt = {singleProduct.updatedAt || ""}
            isActive = {singleProduct.isActive || false}
        />
    )
}