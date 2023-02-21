import React from 'react'
import CartProducts from '../CartProducts/CartProducts'
import { useSelector,useDispatch } from "react-redux"
import "./Cart.css"

const Cart = () => {
    const cart = useSelector(state => state.cart.cart)
    
    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
            total += item.quantity
        })
        return total
    }
    console.log(cart);
    return (
        <div className='cart'>
            <h1 className='cart_heading'>Cart({getTotalQuantity()})</h1>
            <hr></hr>
            {
                cart.length>0 ? (<div className='cart_items'>
                    {cart.map((item) => {
                        return (
                            <>
                                <CartProducts id={item.id} imagesrc={item.imgsrc} price={item.price} description={item.description} quantity={item.quantity} />
                            </>
                        )
                    })}
                </div>) :<img className='emptybasket' src="https://shop.millenniumbooksource.com/static/images/cart1.png"/>
            }
            <hr></hr>
            <div className='subtotal'>

            </div>
        </div>
    )
}

export default Cart