import React from 'react'
import {FcGoogle} from "react-icons/fc"
import "./Login.css"

const Login = () => {
    return (
        <div className='login'>
            <div className='login_popup'>
                <h1>Login/Sign Up On Snapdeal</h1>
                <p>Please provide your Mobile Number or Email to Login/ Sign Up on Snapdeal</p>
                <input type="text" placeholder='only for premeium..'/>
                <button className='continue'>Continue</button>
                <span>or login using</span>
                <button className='google_login'><FcGoogle/>google</button>
            </div>
        </div>
    )
}

export default Login