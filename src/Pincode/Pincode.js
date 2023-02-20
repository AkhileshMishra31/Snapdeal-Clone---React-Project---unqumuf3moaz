import React from 'react'
import "./pincode.css"

const Pincode = () => {
    return (
        <div className='pincode_section'>
            <div className='pincode_image'>
                <img src="https://i2.sdlcdn.com/img/artboardNext.png" />
            </div>
            <div className='pincode_description'>
                <p>Your Dilevery pincode</p>
                <h3>Enter your pincode to check availability and faster delivery options</h3>
                <input type="text" placeholder='Enter pincode' />
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Pincode