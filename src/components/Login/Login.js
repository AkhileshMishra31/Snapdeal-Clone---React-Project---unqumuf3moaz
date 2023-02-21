import React, { useEffect } from 'react'
import { FcGoogle } from "react-icons/fc"
import "./Login.css"
import { auth } from '../../Firebase'
import firebase from 'firebase'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const username = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(username);
        if (username!=null) {
            navigate("/")
        }
    }, [username])



    const signin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await auth.signInWithPopup(provider)
        const accessToken = res.credential.accessToken
        console.log(res);
        const profile = {
            name: res.user.displayName,
            photoURL: res.user.photoURL,
            email: res.user.email
        }

        dispatch(login(profile))

        navigate("/")

    }



    return (
        <div className='login'>
            <div className='login_popup'>
                <h1>Login/Sign Up On Snapdeal</h1>
                <p>Please provide your Mobile Number or Email to Login/ Sign Up on Snapdeal</p>
                <input type="text" placeholder='only for premeium..' />
                <button className='continue'>Continue</button>
                <span>or login using</span>
                <button onClick={signin} className='google_login'><FcGoogle />google</button>
            </div>
        </div>
    )
}

export default Login