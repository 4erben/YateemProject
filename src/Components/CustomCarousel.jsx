import React from 'react'
import { Carousel , Container } from 'react-bootstrap';
import {useSelector} from "react-redux";
import i1 from "../assets/carousel/1.jpeg";
import i2 from "../assets/carousel/2.jpeg";
import i3 from "../assets/carousel/2.jpeg";
export default function CustomCarousel() {
/*   const baseURL = import.meta.env.VITE_REACT_APP_API_URL; */
/*   const carousels = useSelector(state=>state.banners.banners); */
  const carousels = [
    {
      title:"banner one",
      image_url: i1
    },
     {
      title:"banner two",
      image_url: i2
    }, 
    {
      title:"banner three",
      image_url: i3
    },
  ]
  return (
    <Carousel>
        <Carousel.Item>
          <img className='img-fluid w-100' alt="banner" src={i1} />
      </Carousel.Item>
        <Carousel.Item>
          <img className='img-fluid w-100' alt="banner" src={i2} />
      </Carousel.Item>
        <Carousel.Item>
          <img className='img-fluid w-100' alt="banner" src={i3} />
      </Carousel.Item>
    </Carousel>
  )
}
