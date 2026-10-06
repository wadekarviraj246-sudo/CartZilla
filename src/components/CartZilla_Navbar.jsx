import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CartZilla_Navbar = () => {
  return (
    <Navbar className="cartzilla-navbar">
      <Container fluid className="px-5">

        {/* Menu Icon */}
        <Button variant="link" className="menu-btn">☰</Button>

        {/* Logo */}
        <Navbar.Brand className="cartzilla-logo">CartZilla</Navbar.Brand>

        {/* Categories */}
        <Dropdown className="categories-dropdown">
          <Dropdown.Toggle variant="light" className="categories-btn">Categories</Dropdown.Toggle>
          <Dropdown.Menu className="categories-menu">

            {/* Column 1 : bakery and bread col*/}
            <div className="category-column">
              <h5>Bakery & bread</h5>
              <a href="#">Shop all</a>
              <a href="#">Bread</a>
              <a href="#">Pastries</a>
              <a href="#">Bakery cookies</a>
              <a href="#">Cupcakes</a>
              <a href="#">Buns & rolls</a>

              <h5 className="mt-4">Meat products</h5>
              <a href="#">Shop all</a>
              <a href="#">Fresh meat</a>
              <a href="#">Processed meat</a>
              <a href="#">Seafood</a>
              <a href="#">Poultry products</a>
              <a href="#">Prepared meat</a>
            </div>

            {/* Column 2 : vegetables */}
            <div className="category-column">
              <h5>Vegetables</h5>
              <a href="#">Shop all</a>
              <a href="#">Leafy greens</a>
              <a href="#">Root vegetables</a>
              <a href="#">Allium vegetables</a>
              <a href="#">Peppers and tomatoes</a>
              <a href="#">Cruciferous</a>
              <a href="#">Seasonal squashes</a>
              <a href="#">Beans, peas & lentils</a>

              <h5 className="mt-4">Sauces and ketchup</h5>
              <a href="#">Shop all</a>
              <a href="#">Tomato-based sauces</a>
              <a href="#">Salad dressing</a>
              <a href="#">Hot sauces</a>
            </div>

            {/* Column 3 : fresh fruits*/}
            <div className="category-column">
              <h5>Fresh fruits</h5>
              <a href="#">Shop all</a>
              <a href="#">Citrus fruits</a>
              <a href="#">Berries</a>
              <a href="#">Tropical fruits</a>
              <a href="#">Stone fruits</a>
              <a href="#">Exotic fruits</a>
              <a href="#">Melons</a>

              <h5 className="mt-4">Italian dinner</h5>
              <a href="#">Shop all</a>
              <a href="#">Pasta & sauces</a>
              <a href="#">Italian cheese</a>
              <a href="#">Italian meats</a>
              <a href="#">Desserts & beverages</a>
            </div>

            {/* Column 4 : beverages */}
            <div className="category-column">
              <h5>Beverages</h5>
              <a href="#">Shop all</a>
              <a href="#">Soft drinks</a>
              <a href="#">Juices</a>
              <a href="#">Sports & energy drinks</a>
              <a href="#">Tea and coffee</a>
              <a href="#">Alcoholic beverages</a>

              <h5 className="mt-4">Dairy & eggs</h5>
              <a href="#">Shop all</a>
              <a href="#">Cheese</a>
              <a href="#">Milk & yogurt</a>
              <a href="#">Sour cream</a>
              <a href="#">Eggs</a>
              <a href="#">Butter & margarine</a>
            </div>
          </Dropdown.Menu>
        </Dropdown>

        {/* Searchbox */}
        <Form className="search-box">
          <Form.Control type="search" placeholder="Search for products" />
          <Button variant="link">🔍</Button>
        </Form>

        {/* Delivery */}
        <div className="delivery">
          <b>Delivery</b>
          <span>Set your address</span>
        </div>

        {/* Icons */}
        <div className="navbar-icons">
          <span>☼</span>
          <span>♙</span>
          <span className="cart-icon">
            🛒
            <b>8</b>
          </span>
        </div>
      </Container>
    </Navbar>
  )
}

export default CartZilla_Navbar