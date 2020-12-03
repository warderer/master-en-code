import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import SingleProductCard from '../../components/SingleProductCard';

function Home () {
    const product = {
        isActive: true,
        _id: "5fbc19a65a3f794d72471163",
        product_name: "Awesome Granite Bacon",
        description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        price: 962,
        category: "Kids",
        brand: "Osinski - Prosacco",
        sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
        createdAt: "2020-11-23T20:20:54.245Z",
        updatedAt: "2020-11-23T20:20:54.245Z",
        __v: 0,
        image: "https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg"
    }

    return(
        <div>
            <NavigationBar />
            <h1>Bienvenidos</h1>
            <SingleProductCard product={product}/>
            <SingleProductCard product={product}/>
            <SingleProductCard product={product}/>
            <SingleProductCard product={product}/>
        </div>
    )
}

export default Home;