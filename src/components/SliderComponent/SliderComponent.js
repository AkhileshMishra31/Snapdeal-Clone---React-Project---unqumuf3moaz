import React from 'react'
import "./SliderComponent.css"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"


const SliderComponent = () => {
  return (
    <div className='slidercomponent'>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={45}
        totalSlides={5}
        interval={3000}
        isPlaying={true}
        infinite={true}
      >
        <Slider>
          <Slide index={0}><img src='https://n3.sdlcdn.com/imgs/j/8/e/Health_ID_Snapdeal_ABDM_1300X410-6c79d.jpg' /></Slide>
          <Slide index={1}><img src='https://n3.sdlcdn.com/imgs/k/f/v/12_april_WB_Breezy_Dresses_WEB-5febf.jpg' /></Slide>
          <Slide index={2}><img src="https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Festive_kurta_sets_WEB_1-9d9b7.jpg" /></Slide>
          <Slide index={3}><img src="https://n4.sdlcdn.com/imgs/k/k/z/web_banner_07-092e2.jpg" /></Slide>
          <Slide index={4}><img src="https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Kitchen_Essentials_WEB-cca82.jpg" /></Slide>
        </Slider>
        <ButtonBack className='prev'><BsArrowLeftCircleFill size={45}/></ButtonBack>
        <ButtonNext className='next'><BsArrowRightCircleFill size={45}/></ButtonNext>
      </CarouselProvider>
    </div>
  )
}

export default SliderComponent  