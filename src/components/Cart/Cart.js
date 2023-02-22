import React, { useState } from 'react'
import CartProducts from '../CartProducts/CartProducts'
import { useSelector, useDispatch } from "react-redux"
import "./Cart.css"
import { getTotal, getTotalQuantity } from '../../app/Cartcalculatiions'
import { emptyItem } from '../../features/Shopcart/shopcartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [open, setopen] = useState(false)
    const [card, setcard] = useState(null)
    const [cvc, setcvc] = useState(null)
    const cart = useSelector(state => state.cart.cart)
    const user = useSelector(state => state.auth.user)
    const openform = () => {
        setopen((state) => !state)

    }

    const carddetail = (e) => {
        console.log(e);
        setcard(e.target.value)
    }
    const cvcdetail = (e) => {
        console.log(e);
        setcvc(e.target.value)
    }
    const payment = (e) => {
        e.preventDefault();
        if(cvc==null || isNaN(cvc)){
            alert("cvc Entered Wrong")
            return;
        }
        if(card==null || isNaN(card)){
            alert("card Entered Wrong")
            return;
        }
        
        setTimeout(() => {
            alert("payment done")
            dispatch(emptyItem())
            setcard("")
            setcvc("")
            setopen((state) => !state)
        }, 2000)
    }

    return (
        <>
            <div className='cart'>
                <h1 className='cart_heading'>Cart({getTotalQuantity(cart)})</h1>
                <hr></hr>
                {
                    cart.length > 0 ? (<div className='cart_items'>
                        {cart.map((item) => {
                            return (
                                <>
                                    <CartProducts id={item.id} imagesrc={item.imgsrc} price={item.price} description={item.description} quantity={item.quantity} />
                                </>
                            )
                        })}
                    </div>) : <img className='emptybasket' src="https://shop.millenniumbooksource.com/static/images/cart1.png" />
                }
                <hr></hr>
                <div className='subtotal'>
                    <h2>Subtotal:-</h2>
                    <h2>Rs.{getTotal(cart)}</h2>
                </div>
            </div>
            {
                cart.length <= 0 ?"": <div className='proceed_to_checkout'>
                    {
                        open ? <form className='checkout_form'>
                            <input type="number" onChange={carddetail} placeholder='enter card details...' value={card} />
                            <input type="number" onChange={cvcdetail} placeholder='eneter your cvc..' value={cvc} />
                            <button onClick={payment} className='pay'>Pay</button>
                        </form> : ""
                    }
                    <div>
                        {user?<button onClick={openform} className='checkout'>Checkout</button>:<button className='checkout' onClick={()=>navigate("/login")}>Login first to Complete your order</button>}
                    </div>
                </div>
            }
        </>
    )
}

export default Cart