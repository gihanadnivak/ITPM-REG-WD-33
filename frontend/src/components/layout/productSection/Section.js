import React from 'react'
import { Link } from 'react-router-dom'
import TVimage from '../../../img/tv.jpg'
import Product from './Product'

const Section = () => {
  return (
    <section className='p-lg-5 pt-5 pb-5 bg-light'>
      {/* Mobile Screen */}
      <div className='title d-lg-none text-uppercase h1 bg-dark mb-3 p-3 text-light text-center'>
        TV
      </div>
      <div className='container container-border'>
        {/* Desktop Screen */}
        <div className='row g-4'>
          <div className='col-md-4 d-none d-lg-block'>
            <div className='row bg-primary p-5 h-50'>
              <div className='h2'>TV</div>
              <p className='lead'>
                Shop a wide selection of TVs at affordable prices.
              </p>
              <Link to='/products' className='text-dark text-decoration-none '>
                <span>See All Products </span>
                <i class='bi bi-chevron-right'></i>
              </Link>
            </div>
            <div className='row h-50'>
              <div class='p-0'>
                <img src={TVimage} alt='' className='image' />
              </div>
            </div>
          </div>
          <div className='col-md pt-2 pb-2'>
            <div class='row row-cols-2 row-cols-md-3 g-4'>
              {/* item list */}
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              {/* item list end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
