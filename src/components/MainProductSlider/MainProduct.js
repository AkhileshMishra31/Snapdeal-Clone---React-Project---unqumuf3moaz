import React from 'react'
import Trendingproducts from '../Trendingproducts/Trendingproducts'
import "./Mainproduct.css"

const MainProduct = () => {
    return (
        <div className='main_products'>
           <h1>TRENDING PRODUCTS</h1>
           <Trendingproducts/>
        </div>
    )
}

export default MainProduct