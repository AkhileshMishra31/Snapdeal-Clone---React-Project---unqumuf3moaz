import React from 'react'
import Productscard from '../Productscard/Productscard'
import Carousel from 'react-elastic-carousel'

const Trendingproducts = () => {
    return (
        <div className='trending_products'>
            <Carousel itemsToShow={4}>
                <Productscard />
                <Productscard />
                <Productscard />
                <Productscard />
                <Productscard />
                <Productscard />
                <Productscard />
                <Productscard />
                <Productscard />
            </Carousel>
        </div>
    )
}

export default Trendingproducts