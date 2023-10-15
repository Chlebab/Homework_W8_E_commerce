import React, { useState, useEffect } from 'react'
import BasketItem from './BasketItem'

const Basket = ({basketProp}) => {

    const basketItemCompnents = basketProp.map((basketItem, id) => {
        return(
            <BasketItem key={id} basketItem={basketItem} />
        )
    })


    return (  
        <div>
            <h3>This is your basket: </h3>
            {basketItemCompnents}
        </div>

    );
}

export default Basket;