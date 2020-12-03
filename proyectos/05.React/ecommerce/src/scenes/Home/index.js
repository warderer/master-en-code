import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import SingleProductCard from '../../components/SingleProductCard';

function Home () {
    return(
        <div>
            <NavigationBar />
            <h1>Bienvenidos</h1>
            <SingleProductCard />
            <SingleProductCard />
            <SingleProductCard />
            <SingleProductCard />
        </div>
    )
}

export default Home;