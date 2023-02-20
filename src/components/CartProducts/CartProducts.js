import React from 'react'
import "./CartProducts.css"

const CartProducts = () => {
    const inreasequantity = () => {

    }

    const removefrombasket = () => {

    }

    const decreasequantity = () => {

    }
    return (
        <div className='cart_products'>
            <div className='cart_products_image'>
                <img src="https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg" />
            </div>
            <div className='cart_products_description'>
                <h2>Rigo - Navy Blue Cotton Regular Fit Women's Jumpsuit ( Pack of 1 )</h2>
                <div>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                </div>
                <div className='price'>
                    <span>Rs 299</span>
                    <span> 75% OFF </span>
                    <div className='product_quantity'>
                        <p>Quantity</p>
                        <button onClick={decreasequantity} className='increse_quantity'>-</button>
                        <p>2</p>
                        <button onClick={inreasequantity} className='increse_quantity'>+</button>
                    </div>
                </div>
                <button className='remove_button'>Remove to cart</button>
            </div>
        </div>
    )
}

export default CartProducts