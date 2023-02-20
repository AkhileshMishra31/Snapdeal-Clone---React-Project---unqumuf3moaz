import React from 'react'
import "./DownloadSection.css"

const DownloadSection = () => {
    return (
        <div className='download_section'>
            <div className='download_inner_section'>
                <div className='image_section'>
                    <img src="https://i2.sdlcdn.com/img/appScreenshot@1x.png" />
                </div>
                <div className='download_description'>
                    <h1>Download Snapdeal App Now</h1>
                    <h3>Fast, Simple & Delightful.All it takes is 30 seconds to Download.</h3>
                    <div>
                        <button>Download</button>
                    </div>
                </div>

            </div>
            <img className='green_leaf' src="https://i2.sdlcdn.com/img/leaves1x.png" />
        </div>
    )
}

export default DownloadSection