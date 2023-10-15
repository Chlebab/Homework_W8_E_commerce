import React, { useState, useEffect } from 'react'
import Product from './Product'


const Products = ({productsProp, addToBasket}) => {

    const productComponents = productsProp.map((product) => {
        return (
        <Product key={product.id} id={product.id} addToBasket={addToBasket}>{product.name} 
        <p>Price: {product.price} $$$</p></Product>
        )
    })

    return (  
        <>
            <h3>Products: </h3>
            <ul>
                {productComponents}
            </ul>

        </>
    );
}

export default Products;