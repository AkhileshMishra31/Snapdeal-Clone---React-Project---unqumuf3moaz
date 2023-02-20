import React from 'react'
import "./Productscard.css"

const Productscard = (props) => {
    return (
        <div className='mycard'>
            <div className='product_image'>
                <img src="https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg" />

            </div>
            <div className='product_description'>
                <p>Rigo - Navy Blue Cotton Regular Fit Women's Jumpsuit ( Pack of 1 )</p>
                <div>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                </div>
                <div className='price'>
                    <span>Rs 299</span>
                    <span> 75% OFF </span>
                </div>
            </div>
        </div>
    )
}

export default Productscard