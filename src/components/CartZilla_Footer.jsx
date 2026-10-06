import React from 'react'
import Button from 'react-bootstrap/Button'

const CartZilla_Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#222a35' }}>

      {/* Newsletter */}
      <div className="text-center py-5">
        <h2 className="fw-bold">Stay in touch with us </h2>
        <p className="text-light">Receive the latest updates about our products & promotions</p>
        <div className="d-flex justify-content-center gap-2 mt-4">
          <input
            type="email"
            placeholder="Your email"
            className="form-control rounded-pill"
            style={{
              width: '550px',
              backgroundColor: 'transparent',
              border: '1px solid #59616d',
              color: 'white',
              padding: '15px 22px'
            }}
          />
          <Button variant="danger" className="rounded-pill px-4">Subscribe</Button>
        </div>
      </div>

      <hr className="m-0 border-secondary" />

      {/* Footer Links */}
      <div className="container py-5">
        <div className="row">

          {/* CartZilla */}
          <div className="col-md-4">
            <h3 className="fw-bold">Cartzilla</h3>
            <p className="mt-4 text-light">
              With a wide selection of fresh produce,
              pantry staples, and household essentials,
              we've got everything you need just a click away.
            </p>

            <div className="d-flex gap-4 mt-5 fs-4">
              <span>◎</span>
              <span>f</span>
              <span>➤</span>
              <span>◉</span>
            </div>
          </div>

          {/* Categories */}
          <div className="col-md-2">
            <h5 className="fw-bold">Categories </h5>
            <p>Weekly sale</p>
            <p>Special price</p>
            <p>Easter is coming</p>
            <p>Italian dinner</p>
            <p>Fresh fruits</p>
            <p>Exotic fruits</p>
          </div>

          {/* Company */}
          <div className="col-md-2">
            <h5 className="fw-bold">Company</h5>
            <p>Blog and news</p>
            <p>About us</p>
            <p>FAQ page</p>
            <p>Contact us</p>
            <p>Careers</p>
          </div>

          {/* Account */}
          <div className="col-md-2">
            <h5 className="fw-bold">Account</h5>
            <p>Your account</p>
            <p>Shipping & policies</p>
            <p>Refunds & replacements</p>
            <p>Order tracking</p>
            <p>Delivery info</p>
            <p>Taxes & fees</p>
          </div>

          {/* Customer Service */}
          <div className="col-md-2">
            <h5 className="fw-bold">Customer service </h5>
            <p>Payment methods</p>
            <p>Money back guarantee</p>
            <p>Refunds & replacements</p>
            <p>Order tracking</p>
            <p>Delivery info</p>
            <p>Shipping</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default CartZilla_Footer