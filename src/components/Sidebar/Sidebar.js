import React from 'react'
import "./Sidebar.css"

const sidebamenu = ({ img, heading }) => {
    return (
        <>
        </>
    )
}



const Sidebar = () => {
    return (
        <div className='sidebar_container'>
            <div className='top_categories'>
                <h3>Top categories</h3>
                <div className='top_categories_menu'>
                    <img src="https://i3.sdlcdn.com/img/leftnavicon09/30x30mobile4.png" />
                    <span>mens fashion</span>
                </div>
                <div className='top_categories_menu'>
                    <img src="https://i3.sdlcdn.com/img/leftnavicon09/30x30mobile4.png" />
                    <span>Women's fashion</span>
                </div>
                <div className='top_categories_menu'>
                    <img src="https://i3.sdlcdn.com/img/leftnavicon09/30x30mobile4.png" />
                    <span>Home & kitchen</span>
                </div>
                <div className='top_categories_menu'>
                    <img src="https://i3.sdlcdn.com/img/leftnavicon09/30x30mobile4.png" />
                    <span>Toys, kids and fashion</span>
                </div>
                <div className='top_categories_menu'>
                    <img src="https://i3.sdlcdn.com/img/leftnavicon09/30x30mobile4.png" />
                    <span>Beauty, Helthy& Daily</span>
                </div>
            </div>
            <div className='more_categories'>
                <h3>more categories</h3>
                <span>Automotives</span>
                <span>Mobiles Accessories</span>
                <span>Electronics</span>
                <span>Sports,fitness & outsdoor</span>
                <span>Computer gaming</span>
                <span>Books Midias & music</span>
                <span>Automotives</span>
            </div>
            <div className='trending searches'>
                <h3>trending Searches</h3>
            </div>
        </div>
    )
}

export default Sidebar