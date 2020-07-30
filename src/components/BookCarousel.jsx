import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from '../images/leanonrock.jpeg'
import Image2 from '../images/flowers.jpeg'

const BookCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src={Image2} />
        <p className="legend">Book 1</p>
      </div>
      <div>
        <img src={Image1} />
        <p className="legend">Book 2</p>
      </div>
      <div>
        <img src="images/ymca.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  )
}

export default BookCarousel
