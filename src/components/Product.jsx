import React, { useState, useEffect } from 'react'



const Product = ({children, addToBasket, id}) => {

    const handleBasketClick = () => {
        addToBasket(id)
        console.log("Product in add to basket", id)
    }

    return (  
        <li>
            {children}
            <button type="button" onClick={handleBasketClick}>Add to basket</button>
        </li>
    );
}

export default Product;