import React from 'react'
import "./Header.css"
import { FaShoppingCart } from "react-icons/fa"
import { AiOutlineSearch } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'

const Header = () => {
    return (
        <div className='header'>
            {/* upper */}
            <div className='upper'>
                <div className='container'>
                    <div className='header_upper'>
                        <p>Brand Waali Quality, Bazaar Waali Deal!</p>
                    </div>
                    <div className='header_lower'>
                        <span>Impact@Snapdeal</span>
                        <span>Gift Cards</span>
                        <span>Help Center</span>
                        <span> Sell On Snapdeal</span>
                        <span> Download App</span>
                    </div>
                </div>
            </div>
            {/* lower */}
            <div className='lower'>
                <div className='container navbar'>
                    <div className='header_section_one'>
                        <img src='https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg' />
                    </div>
                    <div className='header_section_two'>
                        <input type="text" />
                        <button> <AiOutlineSearch />Search</button>
                    </div>
                    <div className='header_section_three'>
                        <span>Cart</span>
                        <FaShoppingCart size={28} />
                    </div>
                    <div className='header_section_four'>
                        <span>Sign in</span>
                        <RxAvatar size={28} />
                        <div className="dropdown-content">
                            <div className='dropdown_menu'>
                                <RxAvatar size={20} />
                                <span>Your Account</span>
                            </div>
                            <div className='dropdown_menu'>
                                <RxAvatar size={20} />
                                <span>Your Orders</span>
                            </div>

                            <div className='dropdown_menu'>
                                <RxAvatar size={20} />
                                <span>Your Shortlists</span>
                            </div>
                            <hr></hr>
                            <div className='dropdown_login'>
                                <p>if you are a new userRegister</p>
                                <button>Log in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header