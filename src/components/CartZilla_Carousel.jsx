import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import image1 from './assets/carousel_img1.jpg'
import image2 from './assets/carousel_img2.jpg'
import image3 from './assets/carousel_img3.jpg'

const CartZilla_Carousel = () => {
  return (
    <Carousel>

      {/* Slide 1 */}
      <Carousel.Item>
        <img
          src={image1}
          alt="First slide"
          className="d-block w-100"
        />
        <Carousel.Caption className='top-0 start-0 text-start p-4'>
          <h3 class="free_ship">🔥Free Shipping - Orders over <b>$50</b></h3>
          <p class="discover_fresh"><b>Healthy Food Available for Everyone</b></p>
          <button class="discover_btn">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          src={image2}
          alt="Second slide"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3 class="org_egg">🥚Organic Foods</h3>
          <p class="home_eggs"><b>Organic Eggs from Home Grown Chickens</b></p>
          <button class="discover_btn2">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          src={image3}
          alt="Third slide"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3 class="natural_ingr">🥝Only Natural Ingredeints</h3>
          <p class="refresh_drink"><b>Enjoy Refreshing Summer Drink</b></p>
          <button class="discover_btn3">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CartZilla_Carousel