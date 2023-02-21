import React from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import "./Productdescription.css"
import ReactImageZoom from 'react-image-zoom';
import { useParams } from 'react-router-dom';
import {productsdata} from '../../database/Product'
// src/components/Item.js
import { useDispatch } from 'react-redux';
import {addToCart} from '../../features/Shopcart/shopcartSlice';
const props = { width: 400, height: 250, zoomWidth: 500, img: "1.jpg" };

const Productdescription = () => {
    const {id} = useParams();
    const data=productsdata.find((product)=>product.id==id);
    const dispatch=useDispatch();

    const addtocart=()=>{
        dispatch(addToCart(data))
    }
    const props = { width: 428, height: 504, zoomWidth: 500, img: data.imgsrc };
    return (
        <>
            <p className='para'>Home/ Men's Clothing / Men's T-Shirts & Polos / T Shirt For Men / Veirdo - Green Cotton Regular Fit Men's T-Shirt ( Pack of 1 )</p>
            <div className='product_description_data'>
                <div className='product_image_section'>
                    <ReactImageZoom {...props} />
                </div>
                <div className='product_data'>
                    <div className='product_des_data'>
                        <div className='product_data_description'>
                            <h1>{data.description}</h1>
                            <span><img src="https://n4.sdlcdn.com/imgs/j/a/5/c1571eb935c9bd675d9e3a2173caa08e_w600_h436__AC_-1b3f2.jpg" />
                            </span>
                            <AiOutlineHeart />
                        </div>
                        <div className='product_ratings_section'>
                            <div className='stars'>
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                            </div>
                            <p>(3.9)</p>
                            <div className='review_count'>
                                <span>6025 Ratings|</span>
                                <span>127 Reviews|</span>
                                <span>27 Selfies|</span>
                                <span>Have a question?|</span>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='cart_section'>
                        <div className='total_priice'>
                            <p>MRP  Rs. 6,199  (Inclusive of all taxes)</p>
                            <p>(1) Offers | Applicable on cart</p>
                        </div>
                        <div className='price_section'>
                            <h1>Rs.{data.price}</h1>
                            <div>
                                <img src="https://i1.sdlcdn.com/img/newOffersIcon.png" />
                                <p>Apply for a Snapdeal BOB Credit Card & get 5% Unlimited Cashback</p>
                            </div>
                        </div>
                        <div className='cart_button'>
                            <button onClick={addtocart} className='add_cart'>Add to cart</button>
                            <button className='buy_cart'>Buy Now</button>
                        </div>
                        <div className='dilevery_date'>
                            <p>Dilevery:-</p>
                            <span>Generally delivered in 5 - 9 days</span>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='return_policy'>
                        <p> 7 Days Easy Returns</p>
                        <p>Trustpay: 100% Payment Protection. Return or Replacement is applicable for 7 days after delivery </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productdescription