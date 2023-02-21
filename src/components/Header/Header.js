import React from 'react'
import "./Header.css"
import { FaShoppingCart } from "react-icons/fa"
import { AiOutlineSearch } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { auth } from '../../Firebase'

const Header = () => {
    const user = useSelector((state) => state.auth.user);

    const signout=()=>{
        auth.signOut();
    }
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
                        <NavLink to="/">
                            <img src='https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg' />
                        </NavLink>
                    </div>

                    <div className='header_section_two'>
                        <input type="text" />
                        <button> <AiOutlineSearch />Search</button>
                    </div>
                    <div className='header_section_three'>
                        <span>Cart</span>
                        <NavLink to="/cart">
                            <FaShoppingCart size={28} />
                        </NavLink>
                    </div>
                    <div className='header_section_four'>
                        <span>{user?user.name:"Sign in"}</span>
                        {user?<img src={user.photoURL}/>: <RxAvatar size={28} />}
                       
                        <div className="dropdown-content">
                            <div className='dropdown_menu'>
                                <RxAvatar size={20} />
                                <span>{user?user.name:"Your Account"}</span>
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
                                {
                                    user ? (<><p style={{ textAlign: "center", marginRight: "10px" }}>{user.email}</p>
                                        <button onClick={signout}>Log Out</button></>) : (<><p>if you are a new userRegister</p>
                                            <NavLink to="/login"><button>Log in</button></NavLink></>)
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header