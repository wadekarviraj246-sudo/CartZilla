import React from 'react'
import Card from 'react-bootstrap/Card'

import muelsiImage from './assets/muelsi.png'
import orangeImage from './assets/orange.png'
import pepsiImage from './assets/pepsi.png'
import mozarellaImage from './assets/mozarella.png'
import coconutImage from './assets/coconut2.png'
import pestoImage from './assets/pesto.png'
import mangoImage from './assets/mango.png'
import asparagusImage from './assets/asparagus.png'

const CartZilla_Products = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {/* CATEGORIES  */}
        <div className="col-md-3">
          <h2>Categories</h2>
          <hr />

          {/* Category 1 */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="rounded-circle bg-light p-3">
              🥯
            </div>
            <div>
              <h5 className="mb-1">Bakery & bread</h5>
              <small>230 products</small>
            </div>
          </div>


          {/* Category 2 */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="rounded-circle bg-light p-3">
              🥬
            </div>
            <div>
              <h5 className="mb-1">Vegetables</h5>
              <small>180 products</small>
            </div>
          </div>

          {/* Category 3 */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="rounded-circle bg-light p-3">
              🍎
            </div>
            <div>
              <h5 className="mb-1">Fresh fruits</h5>
              <small>205 products</small>
            </div>
          </div>

          {/* Category 4 */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="rounded-circle bg-light p-3">
              🍅
            </div>
            <div>
              <h5 className="mb-1">Italian dinner</h5>
              <small>309 products</small>
            </div>
          </div>

          {/* Category 5 */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="rounded-circle bg-light p-3">
              🥤
            </div>
            <div>
              <h5 className="mb-1">Beverages</h5>
              <small>372 products</small>
            </div>
          </div>

          {/* Category 6 */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="rounded-circle bg-light p-3">
              🥩
            </div>
            <div>
              <h5 className="mb-1">Meat products</h5>
              <small>124 products</small>
            </div>
          </div>
        </div>

        {/* POPULAR PRODUCTS */}
        <div className="col-md-9">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Popular products</h2>
            <span>View all →</span>
          </div>
          <hr />

          {/*  PRODUCT ROW  */}
          <div className="row">

            {/* Product 1 */}
            <div className="col-md-3">
              <Card className="border-0">
                <Card.Img
                  src={muelsiImage}
                  style={{
                    height: '180px',
                    objectFit: 'contain'
                  }}
                />
                <Card.Body>
                  <h5>$2.15</h5>
                  <Card.Text>Muesli Fitness Energy,gluten free</Card.Text>
                  <small>500g</small>
                </Card.Body>
              </Card>
            </div>

            {/* Product 2 */}
            <div className="col-md-3">
              <Card className="border-0">
                <Card.Img
                  src={orangeImage}
                  style={{
                    height: '180px',
                    objectFit: 'contain'
                  }}
                />
                <Card.Body>
                  <h5>$3.12</h5>
                  <Card.Text>Fresh orange Klementina</Card.Text>
                  <small>1kg</small>
                </Card.Body>
              </Card>
            </div>

            {/* Product 3 */}
            <div className="col-md-3">
              <Card className="border-0">
                <Card.Img
                  src={pepsiImage}
                  style={{
                    height: '180px',
                    objectFit: 'contain'
                  }}
                />
                <Card.Body>
                  <h5>$0.80</h5>
                  <Card.Text>
                    Pepsi soda classic, can</Card.Text>
                  <small>330ml</small>
                </Card.Body>
              </Card>
            </div>

            {/* Product 4 */}
            <div className="col-md-3">
              <Card className="border-0">
                <Card.Img
                  src={mozarellaImage}
                  style={{
                    height: '180px',
                    objectFit: 'contain'
                  }}
                />
                <Card.Body>
                  <h5>$2.99</h5>
                  <Card.Text>Mozzarella mini cheese</Card.Text>
                  <small>250g</small>
                </Card.Body>
              </Card>
            </div>

            {/* Product 5 */}
            <div className="col-md-3 mt-4">
              <Card className="border-0">
                <Card.Img
                  src={coconutImage}
                  style={{
                    height: '180px',
                    objectFit: 'contain'
                  }}
                />
                <Card.Body>
                  <h5>$4.25</h5>
                  <Card.Text>Fresh coconut</Card.Text>
                  <small>500g</small>
                </Card.Body>
              </Card>
            </div>

            {/* Product 6 */}
            <div className="col-md-3 mt-4">
              <Card className="border-0">
                <Card.Img
                  src={pestoImage}
                  style={{
                    height: '180px',
                    objectFit: 'contain'
                  }}
                />
                <Card.Body>
                  <h5>$3.50</h5>
                  <Card.Text>Pesto creamy sauce</Card.Text>
                  <small>190g</small>
                </Card.Body>
              </Card>
            </div>

            {/* Product 7 */}
            <div className="col-md-3 mt-4">
              <Card className="border-0">
                <Card.Img
                  src={mangoImage}
                  style={{
                    height: '180px',
                    objectFit: 'contain'
                  }}
                />
                <Card.Body>
                  <h5>$2.75</h5>
                  <Card.Text>Fresh mango</Card.Text>
                  <small>1kg</small>
                </Card.Body>
              </Card>
            </div>

            {/* Product 8 */}
            <div className="col-md-3 mt-4">
              <Card className="border-0">
                <Card.Img
                  src={asparagusImage}
                  style={{
                    height: '180px',
                    objectFit: 'contain'
                  }}
                />
                <Card.Body>
                  <h5>$3.20</h5>
                  <Card.Text>Fresh asparagus</Card.Text>
                  <small>500g</small>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartZilla_Products