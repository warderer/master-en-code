import React from 'react';

export default (Navbar) => function Navbarhoc(){
    return (
        <Navbar
            brandName="KiverShop"
            menuItems=
                {[
                    "Books",
                    "Movies",
                    "Music",
                    "Games",
                    "Electronics",
                    "Computers",
                    "Home",
                    "Garden",
                    "Tools",
                    "Grocery",
                    "Health",
                    "Beauty",
                    "Toys",
                    "Kids",
                    "Baby",
                    "Clothing",
                    "Shoes",
                    "Jewelery",
                    "Sports",
                    "Outdoors",
                    "Automotive",
                    "Industrial"
                ]}
            menuItemsShowLimit={6}
            customerName="Sign in"
            customerAddress="Choose your address"
            cartItems={0}
        />)
}