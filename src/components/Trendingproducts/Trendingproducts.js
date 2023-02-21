import React from 'react'
import Productscard from '../Productscard/Productscard'
import Carousel from 'react-elastic-carousel'
import { useState } from 'react'
import {productsdata} from '../../database/Product'


// const productsdata = [
//     {
//         id:123456781,
//         imgsrc: "https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg",
//         stars: "", description: "Veirdo - Green Cotton Regular Fit Men's T-Shirt ( Pack of 1 )",
//         price: 244,
//         ratings: 3,
//         stockleft: 2
//     },
//     {
//         id:123456782,
//         imgsrc: "https://n4.sdlcdn.com/imgs/k/l/u/NAUGHTY-TOYS-PRESENT-QING-CUP-SDL481261712-2-074cf.jpeg",
//         stars: "", description: "NAUGHTY TOYS PRESENT QING CUP POCKET PUSSY FOR MALE (MULTI COLOR) BY KAMAHOUSE",
//         price: 1898,
//         ratings: 3,
//         stockleft: 2
//     },
//     {
//         id:123456783,
//         imgsrc: "https://n1.sdlcdn.com/imgs/k/l/y/Ministry-Of-Nuts-Pack-of-SDL023394820-1-fcbf4.jpg",
//         stars: "",
//         description: "Ministry Of Nuts Pack of 2 Premium Dry Fruits Whole Cashew Nuts 200g, Seedless Raisins 200g - Total 400g All Natural, Good Source of",
//         price: 1248,
//         ratings: 4,
//         stockleft: 1
//     },
//     {
//         id:123456784,
//         imgsrc: "https://n1.sdlcdn.com/imgs/k/e/u/Veirdo-100-Cotton-Regular-Fit-SDL051246309-1-51a91.jpg",
//         stars: "",
//         description: "Veirdo - Multicolor Cotton Regular Fit Men's T-Shirt ( Pack of 1 )",
//         price: 399,
//         ratings: 2,
//         stockleft: 5
//     },
//     {
//         id:123456785,
//         imgsrc: "https://n3.sdlcdn.com/imgs/k/i/j/Rigo-Cotton-Regular-Fit-Navy-SDL576376983-3-39d9f.jpg",
//         stars: "",
//         description: "Rigo - Navy Blue Cotton Regular Fit Women's Jumpsuit ( Pack of 1 )",
//         price: 599,
//         ratings: 4,
//         stockleft: 4
//     },
//     {
//         id:123456786,
//         imgsrc: "https://n3.sdlcdn.com/imgs/k/j/9/Sirona-1-Intimate-Cloths-Under-SDL165879351-3-1a5d3.jpg",
//         stars: "",
//         description: "Sirona Disposable Underarm Sweat Pads for Men and Women - 12 Pads | Peel-off | Prevents Stains, Absorbs Sweat & Unpleasant Odour",
//         price: 5999,
//         ratings: 4,
//         stockleft: 4
//     },
//     {
//         id:123456787,
//         imgsrc: "https://n3.sdlcdn.com/imgs/k/i/j/Rigo-Cotton-Regular-Fit-Navy-SDL576376983-3-39d9f.jpg",
//         stars: "",
//         description: "Rigo - Navy Blue Cotton Regular Fit Women's Jumpsuit ( Pack of 1 )",
//         price: 599,
//         ratings: 4,
//         stockleft: 4
//     },
//     {
//         id:123456788,
//         imgsrc: "https://n3.sdlcdn.com/imgs/k/i/j/Rigo-Cotton-Regular-Fit-Navy-SDL576376983-3-39d9f.jpg",
//         stars: "",
//         description: "Rigo - Navy Blue Cotton Regular Fit Women's Jumpsuit ( Pack of 1 )",
//         price: 599,
//         ratings: 4,
//         stockleft: 4
//     },
//     {
//         id:123456789,
//         imgsrc: "https://n3.sdlcdn.com/imgs/k/i/j/Rigo-Cotton-Regular-Fit-Navy-SDL576376983-3-39d9f.jpg",
//         stars: "",
//         description: "Rigo - Navy Blue Cotton Regular Fit Women's Jumpsuit ( Pack of 1 )",
//         price: 599,
//         ratings: 4,
//         stockleft: 4
//     }

// ]

const Trendingproducts = () => {

    const [products, setproducts] = useState(productsdata)


    return (
        <div className='trending_products'>
            <Carousel itemsToShow={4}>
                {
                    products.map((item) => {
                        return (
                            <>
                                <Productscard id={item.id} imagesrc={item.imgsrc}  price={item.price} description={item.description} />
                            </>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Trendingproducts