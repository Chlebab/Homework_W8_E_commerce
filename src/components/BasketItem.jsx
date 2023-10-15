import React, { useState, useEffect } from 'react'

const BasketItem = ({basketItem}) => {
    if(!basketItem){
        return null
    }
    return (  
        <div>
            <p>{basketItem.name}</p>
        </div>
    );
}

export default BasketItem;