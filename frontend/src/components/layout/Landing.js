import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Cart from './Cart'
import Section from './productSection/Section'
import Slider from './Slider'
import Footer from './Footer'
import Boxes from './Boxes'

const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      <Slider />
      <Cart />
      <Section />
      <Section />
      <Boxes />
      <Footer />
    </Fragment>
  )
}

export default Landing
