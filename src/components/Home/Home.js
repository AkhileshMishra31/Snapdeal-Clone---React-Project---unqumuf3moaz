import React from 'react'
import Pincode from '../../Pincode/Pincode'
import Sidebar from '../Sidebar/Sidebar'
import SliderComponent from '../SliderComponent/SliderComponent'
import Trendingproducts from '../Trendingproducts/Trendingproducts'
import "./Home.css"

const Home = () => {
    return (
        <div className='home'>
            <div className="side_bar_grid">
                <Sidebar />
            </div>
            <div className="corousel_grid"><SliderComponent /></div>
            <div className="pincode_grid"><Pincode /></div>
            <div className="product_slider"><Trendingproducts/></div>
            <div className="bar_code">
                <img src="https://i2.sdlcdn.com/img/snapdeal/barCode_Home1x.png"/>
                <div className='bar_code_content'>
                    <h4>Enjoy Convinient</h4>
                    <span>Scan to download app</span>
                </div>
            </div>
        </div>
    )
}

export default Home