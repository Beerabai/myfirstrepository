"use client"
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
const Banner = () => {
 const banner=useSelector((state)=> state.movie.Banner);
 { if(!banner)
  return null;
 }
  return (
  <>
   <Carousel>
                <Carousel.Item >
                <div className="banImg">
                </div>
                </Carousel.Item>
         
                <Carousel.Item >
                <div className="banImg1">
                </div>
                </Carousel.Item>
                <Carousel.Item >
                <div className="banImg2">
                </div>
                </Carousel.Item>

            </Carousel>
                

            
  </>
  )
}

export default Banner
