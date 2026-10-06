import React from 'react'
import Card from 'react-bootstrap/Card'

import mockupJuiceImage from './assets/mockup_juice.jpg'
import oliveOilImage from './assets/olive_oil.png'
import porkbuttImage from './assets/pork_butt.png'
import grapefruitImage from './assets/grapefruit.png'
import exquisaImage from './assets/exquisa.png'

const CartZilla_SpecialProducts = () => {
  return (
    <div className="container py-5">
      <div className="row">

        {/* LEFT BANNER */}
        <div className="col-md-3">
          <div
            className="rounded-4 p-4"
            style={{
              height: '480px',
              backgroundColor: '#b9ddea',
              overflow: 'hidden'
            }}
          >
            <h2 className="fw-semibold">Make breakfast <br />healthy and easy</h2>
            <p className="mt-4">Shop now&nbsp; →</p>

            <div className="d-flex justify-content-center gap-2 mt-5">
              <img
                src={mockupJuiceImage}
                alt="Product"
                style={{
                  width: '115%',
                  height: '250px',
                  objectFit: 'contain'
                }}
              />

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-9">

          {/* Heading */}
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="fw-semibold">Special products</h2>
            <span>View all&nbsp; →</span>
          </div>
          <hr />

          {/* PRODUCTS */}
          <div className="row">

            {/* Product 1 */}
            <div className="col-md-3">
              <Card className="border-0">
                <div className="text-end">♡</div>
                <Card.Img
                  src={oliveOilImage}
                  style={{
                    height: '200px',
                    objectFit: 'contain'
                  }}
                />
                <Card.Body>
                  <h5 className="fw-bold">$18.60</h5>
                  <Card.Text> Pure virgin olive oil Basso</Card.Text>
                  <small className="text-secondary">1000ml</small>
                </Card.Body>
              </Card>
            </div>

            {/* Product 2 */}
            <div className="col-md-3">
              <Card className="border-0">
                <div className="text-end">♡</div>
                <Card.Img
                  src={porkbuttImage}
                  style={{
                    height: '200px',
                    objectFit: 'contain'
                  }}
                />
                <Card.Body>
                  <h5 className="fw-bold">$9.15</h5>
                  <Card.Text>Fresh pork butt steakswith rosemary</Card.Text>
                  <small className="text-secondary">500g</small>
                </Card.Body>
              </Card>
            </div>

            {/* Product 3 */}
            <div className="col-md-3">
              <Card className="border-0">
                <div className="text-end"> ♡</div>
                <Card.Img
                  src={grapefruitImage}
                  style={{
                    height: '200px',
                    objectFit: 'contain'
                  }}
                />
                <Card.Body>
                  <h5 className="fw-bold">$3.40</h5>
                  <Card.Text>Fresh red grapefruit</Card.Text>
                  <small className="text-secondary">1kg</small>
                </Card.Body>
              </Card>
            </div>

            {/* Product 4 */}
            <div className="col-md-3">
              <Card className="border-0">
                <div className="text-end">♡</div>
                <Card.Img
                  src={exquisaImage}
                  style={{
                    height: '200px',
                    objectFit: 'contain'
                  }}
                />
                <Card.Body>
                  <h5 className="fw-bold"> $2.59</h5>
                  <Card.Text>Soft creme cheese with greens</Card.Text>
                  <small className="text-secondary">150g</small>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartZilla_SpecialProducts


