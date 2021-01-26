import React, { useEffect } from 'react';
import { ProductsContext,   } from '../../context';
// {
//     "user": {
//         "role": "CUSTOMER",
//         "isActive": true,
//         "_id": "",
//         "first_name": "Cesar",
//         "last_name": "Guerra",
//         "email": "cesar@cesarguerra.mx",
//         "createdAt": "2020-12-01T02:54:46.966Z",
//         "updatedAt": "2020-12-01T02:54:46.966Z",
//         "__v": 0
//     },
//     "role": "CUSTOMER"
// }

export default (Navbar) => function Navbarhoc(){

    const [{ products, productsIsFetching, productsIsError }, { getProducts }] = ProductsContext.useProductsContext();

    useEffect(() => {
        getProducts();

    }, []);

    const renderContent = () => {
        if (productsIsFetching) {
            return (
                <Navbar
                    brandName="Shop"
                    menuItems= {[]}
                    menuItemsShowLimit={6}
                    customerName="Sign in"
                    customerAddress="Choose your address"
                    cartItems={0}
                />
            )
        }
        if (productsIsError) {
            return <h1>{productsIsError}</h1>
        }
        if (products) {
            return (
                <Navbar
                    brandName="KiverShop"
                    menuItems= {[...new Set(products.map(product => product.category))].sort((a, b) => a.localeCompare(b))}
                    menuItemsShowLimit={6}
                    customerName="Sign in"
                    customerAddress="Choose your address"
                    cartItems={0}
                />
            )
        }
        return null;
    }

    return (
        <div>
            {renderContent()}
        </div>
        )
}