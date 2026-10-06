import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

import cakeImage from './assets/cake.png'
import blueberryImage from './assets/blueberry.png'

const Fish_Cake_Blueberry = () => {
  return (
    <CardGroup className="pt-4 gap-4 mx-5">
      {/* Card 1 */}
      <Card
        className="border-0 rounded-4 overflow-hidden"
        style={{ height: '300px', backgroundColor: '#fff0f2' }} >
        <Card.Body className="p-4 position-relative">
          <small>124 products</small>
          <Card.Title className="mt-3 fw-semibold fs-3">Only fresh fish <br />to your table</Card.Title>
          <a href="#" className="text-dark text-decoration-none">Shop now →</a>

          <Card.Img
            src={cakeImage}
            className="position-absolute"
            style={{
              width: '48%',
              right: '-5px',
              bottom: '-10px',
            }}
          />

        </Card.Body>
      </Card>

      {/* Card 2 */}
      <Card
        className="border-0 rounded-4 overflow-hidden"
        style={{ height: '300px', backgroundColor: '#edf9f3' }} >
        <Card.Body className="p-4 position-relative">
          <small>97 products</small>
          <Card.Title className="mt-3 fw-semibold fs-3">Products for<br />Easter table
          </Card.Title>
          <a href="#" className="text-dark text-decoration-none">Shop now →</a>

          <Card.Img
            src={cakeImage}
            className="position-absolute"
            style={{
              width: '48%',
              right: '-5px',
              bottom: '-10px',
            }}
          />
        </Card.Body>
      </Card>

      {/* Card 3 */}
      <Card
        className="border-0 rounded-4 overflow-hidden"
        style={{ height: '300px', backgroundColor: '#edf4ff' }}>
        <Card.Body className="p-4 position-relative">
          <small>28 products</small>
          <Card.Title className="mt-3 fw-semibold fs-3">Berries from<br />the garden
          </Card.Title>

          <a href="#" className="text-dark text-decoration-none">Shop now →</a>

          <Card.Img
            src={blueberryImage}
            className="position-absolute"
            style={{
              width: '52%',
              right: '-10px',
              bottom: '-10px',
            }}
          />
        </Card.Body>
      </Card>
    </CardGroup>
  )
}

export default Fish_Cake_Blueberry