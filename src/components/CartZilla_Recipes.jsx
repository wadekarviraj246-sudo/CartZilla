import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import gardenSaladImage from './assets/garden_salad.jpg'
import rasberryImage from './assets/rasberry_juice.jpg'
import pennePastaImage from './assets/penna_pasta.jpg'
import gastronomyImage from './assets/gastronomy.jpg'


const CartZilla_Recipes = () => {
  return (
    <div className="container py-5">
      <h2 className="fw-semibold mb-4">Recipes</h2>

      <div className="row">

        {/* LEFT SIDE - RECIPES */}

        <div className="col-md-5">

          {/* Recipe 1 */}
          <div className="d-flex gap-4 mb-4">
            <img
              src={gardenSaladImage}
              alt="Garden salad"
              className="rounded-3"
              style={{
                width: '245px',
                height: '175px',
                objectFit: 'cover'
              }}
            />

            <div>
              <h5>Garden salad with a mix of lettuce, cucumber and tomato</h5>
              <p className="text-secondary mt-4">
                ◷ &nbsp; 30 min &nbsp;&nbsp;
                ⚡ &nbsp; Easy &nbsp;&nbsp;
                ♧ &nbsp; 4 por
              </p>
            </div>
          </div>

          {/* Recipe 2 */}
          <div className="d-flex gap-4 mb-4">
            <img
              src={rasberryImage}
              alt="Lemonade"
              className="rounded-3"
              style={{
                width: '245px',
                height: '175px',
                objectFit: 'cover'
              }}
            />

            <div>
              <h5>Raspberry fresh lemonade with lemon, strawberry syrup and mint</h5>
              <p className="text-secondary mt-4">
                ◷ &nbsp; 50 min &nbsp;&nbsp;
                ⚡ &nbsp; Hard &nbsp;&nbsp;
                ♧ &nbsp; 8 por
              </p>
            </div>
          </div>

          {/* Recipe 3 */}
          <div className="d-flex gap-4 mb-4">
            <img
              src={pennePastaImage}
              alt="Penne pasta"
              className="rounded-3"
              style={{
                width: '245px',
                height: '175px',
                objectFit: 'cover'
              }}
            />

            <div>
              <h5>Penne pasta with spinach and zucchini in a creamy sauce</h5>
              <p className="text-secondary mt-4">
                ◷ &nbsp; 25 min &nbsp;&nbsp;
                ⚡ &nbsp; Easy &nbsp;&nbsp;
                ♧ &nbsp; 2 por
              </p>
            </div>
          </div>
          <a href="#" className="text-dark text-decoration-none"> View all →</a>
        </div>

        {/* RIGHT SIDE - COOKBOOK */}
        <div className="col-md-7">
          <Card className="border rounded-4 p-4">
            <div className="row align-items-center">

              {/* Book Image */}
              <div className="col-md-6">
                <img
                  src={gastronomyImage}
                  alt="Cookbook"
                  className="rounded-3 w-100"
                  style={{
                    height: '500px',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Book Details */}
              <div className="col-md-6">
                <span className="badge bg-light text-dark">Cookbook</span>
                <h2 className="mt-4">The Best in Gastronomy</h2>
                <p>Author: <strong>Dana Chambers</strong></p>
                <p className="text-secondary">
                  An exquisite cookbook that takes readers
                  on a culinary journey around the world.
                  With stunning photography and detailed
                  instructions ...
                </p>
                <h2 className="mt-4">$12.40</h2>
                <Button variant="dark" className="rounded-pill px-4 py-3 mt-3" >Shop book →</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CartZilla_Recipes