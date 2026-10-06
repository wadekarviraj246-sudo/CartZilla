import React from 'react'
import CartZilla_Navbar from './components/CartZilla_Navbar'
import CartZilla_Breadcrumbs from './components/CartZilla_Breadcrumbs'
import CartZilla_Carousel from './components/CartZilla_Carousel'
import Fish_Cake_Blueberry from './components/Fish_Cake_Blueberry'
import CartZilla_Products from './components/CartZilla_Products'
import CartZilla_SpecialProducts from './components/CartZilla_SpecialProducts'
import CartZilla_Recipes from './components/CartZilla_Recipes'
import CartZilla_Footer from './components/CartZilla_Footer'

const App = () => {
  return (
    <div>
      <CartZilla_Navbar />
      <CartZilla_Breadcrumbs />
      <CartZilla_Carousel />
      <Fish_Cake_Blueberry />
      <CartZilla_Products />
      <CartZilla_SpecialProducts />
      <CartZilla_Recipes />
      <CartZilla_Footer />
    </div>
  )
}

export default App
