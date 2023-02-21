import React from 'react'
import CartProducts from '../CartProducts/CartProducts'
import "./Cart.css"

const Cart = () => {
    return (
        <div className='cart'>
            <h1 className='cart_heading'>Cart</h1>
            <hr></hr>
            <div className='cart_items'>
                <CartProducts />
                <CartProducts />
                <CartProducts />
            </div>
            <hr></hr>
            <div className='subtotal'>
                <p>Subtotal:-</p>
                <p>RS.233</p>  
                <div>
                    <p>Items:-</p>
                    <p>3</p>
                </div> 
            </div>
        </div>
    )
}

export default Cart