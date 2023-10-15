import React, { useState, useEffect } from 'react'
import Products from '../components/Products';
import Basket from '../components/Basket';
import { Link } from "react-router-dom";



const Shop = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Silver ingot",
            price: 10,
        },
        {
            id: 2,
            name: "Copper ingot",
            price: 30
        },
        {
            id: 3,
            name: "Gold ingot",
            price: 50
        },
        {
            id: 4,
            name: "Diamond",
            price: 150
        }
    ])

    const [basketItems, setBasketItems] = useState([])

    const addToBasket = (id) => {
        const basketArray = [... basketItems, products[id]]
        setBasketItems(basketArray)
    }

    useEffect(() => {
        console.log('Basket Items:', basketItems);
    }, [basketItems]);


    return (  
        <>
            <h2>I am a shop container</h2>
            <p>Your basket has {basketItems.length} items</p>
            <Link to="/basket">Go to basket</Link>
            {/* {basketItems ? <Basket basketProp={basketItems}/> : null} */}
            <Products addToBasket={addToBasket} productsProp={products}/>
        </>
    );
}

export default Shop;