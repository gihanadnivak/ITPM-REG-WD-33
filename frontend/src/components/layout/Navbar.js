import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'

const Navbar = () => {
  return (
    <div>
      <div className='section nav-bar-top d-md-block d-none'>
        <h6 className='text-light mb-0 top-left'>
          {' '}
          <i class='bi bi-telephone-fill pe-2'></i>
          Hot Line <span className='fw-light'>+94 123 2345 </span>
          <span className='h5 fw-light ps-1 pe-1'>|</span>
          <Link to='/' className='text-decoration-none text-light'>
            Help & Support
          </Link>
        </h6>
        <h6 className='text-light mb-0 top-email'>
          <i className='bi bi-envelope-fill pe-2'></i>techgear@gmail.com
        </h6>
      </div>
      <nav className='navbar navbar-expand-lg nav-bar navbar-dark py-lg-3 px-3 sticky-top'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            TECH GEAR
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navmenu'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navmenu'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item fw-normal fs-5 px-2'>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </li>
              <li className='nav-item fw-normal fs-5 px-2'>
                <Link to='/products' className='nav-link'>
                  Products
                </Link>
              </li>
              <li className='nav-item fw-normal fs-5 px-2'>
                <Link to='/about' className='nav-link'>
                  About
                </Link>
              </li>
            </ul>
            <ul
              className='navbar-nav ms-auto justify-content-around'
              style={{ flexDirection: 'row' }}
            >
              <li className='nav-item fw-normal fs-5'>
                <Link
                  to='/'
                  className='nav-link'
                  data-bs-toggle='offcanvas'
                  data-bs-target='#offcanvasRight'
                >
                  Cart <i class='bi bi-cart-fill'></i>
                </Link>
              </li>
              {/* <li className='nav-item fw-normal fs-5'>
              <Link to='/login' className='nav-link'>
                Login <i class='bi bi-person-plus-fill'></i>
              </Link>
            </li> */}
              {/* After Login */}
              <li className='nav-item dropdown fw-normal fs-5'>
                <Link
                  className='nav-link dropdown-toggle'
                  to='/'
                  id='navbarDarkDropdownMenuLink'
                  role='button'
                  data-bs-toggle='dropdown'
                >
                  Bhanuka
                </Link>
                <ul className='dropdown-menu dropdown-menu-dark dropdown-menu-end'>
                  <li>
                    <Link className='dropdown-item' to='/profile'>
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' href='#'>
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/admin'>
                      Admin
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' href='#'>
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
              {/* After Login End */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
