import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Productscard.css"

const Productscard = ({id, imagesrc, description, price }) => {

    const navigate=useNavigate();

    return (
        <NavLink to={`/products/${id}`}>
            <div className='mycard'>
                <div className='product_image'>
                    <img src={imagesrc} />

                </div>
                <div className='product_description'>
                    <p style={{ textAlign: "center" }}>{description.substring(0, 39)}</p>
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
        </NavLink>
    )
}

export default Productscard