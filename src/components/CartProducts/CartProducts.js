import React from 'react'
import "./CartProducts.css"
import { useSelector,useDispatch } from "react-redux"
import{incrementQuantity,decrementQuantity,removeItem} from "../../features/Shopcart/shopcartSlice"

const CartProducts = ({id, imagesrc, description, price ,quantity})=> {
    const dispatch = useDispatch()
    const inreasequantity = () => {
       dispatch(incrementQuantity(id))
    }

    const removefrombasket = () => {
      dispatch(removeItem(id))
    }

    const decreasequantity = () => {
        dispatch(decrementQuantity(id))
    }
    return (
        <div className='cart_products'>
            <div className='cart_products_image'>
                <img src={imagesrc} />
            </div>
            <div className='cart_products_description'>
                <h2>{description}</h2>
                <div>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                </div>
                <div className='price'>
                    <span>{price}</span>
                    <span> 75% OFF </span>
                    <div className='product_quantity'>
                        <p>Quantity</p>
                        <button onClick={decreasequantity} className='increse_quantity'>-</button>
                        <p>{quantity}</p>
                        <button onClick={inreasequantity} className='increse_quantity'>+</button>
                    </div>
                </div>
                <button onClick={removefrombasket} className='remove_button'>Remove to cart</button>
            </div>
        </div>
    )
}

export default CartProducts