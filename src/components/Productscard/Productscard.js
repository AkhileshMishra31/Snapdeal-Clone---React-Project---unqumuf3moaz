import React from 'react'
import "./Productscard.css"

const Productscard = ({imagesrc,description,price}) => {
    return (
        <div className='mycard'>
            <div className='product_image'>
                <img src={imagesrc} />

            </div>
            <div className='product_description'>
                <p style={{textAlign:"center"}}>{description.substring(0, 39)}</p>
                <div>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                </div>
                <div className='price'>
                    <span>{price}</span>
                    <span> 75% OFF </span>
                </div>
            </div>
        </div>
    )
}

export default Productscard