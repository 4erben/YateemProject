import React from 'react'
import { Carousel , Container } from 'react-bootstrap'
import i1 from "../assets/carousel/1.jpeg";
import i2 from "../assets/carousel/2.jpeg";
import i3 from "../assets/carousel/2.jpeg";
export default function CustomCarousel() {
  return (

    <Carousel>
      <Carousel.Item>
        <img className='img-fluid w-100' alt='img1' src={i1} />
      </Carousel.Item>
      <Carousel.Item>
      <img className='img-fluid w-100' alt='img1' src={i2} />
      </Carousel.Item>
      <Carousel.Item>
      <img className='img-fluid w-100' alt='img1' src={i3} />
      </Carousel.Item>
    </Carousel>
  )
}
