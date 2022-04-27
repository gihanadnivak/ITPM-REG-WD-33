import React, {Fragment} from 'react'
import {Link, Route, Switch, withRouter} from "react-router-dom";

import AdminHome from './AdminHome'
import Orders from './Orders'
import Payments from './Payments'
import CustomerManagment from './CustomerManagment'
import EmployeeManagment from './EmployeeManagment'
import SupplierManagment from './SupplierManagment'
import AdvertismentManagment from './AdvertismentManagment'
import Store from "./Store";

const Dashboard = () => {
  return (
    <Fragment>
      <header className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'>
        <a
          className='navbar-brand admin-brand col-md-3 col-lg-2 me-0 px-3 fw-bold'
          href='#'
        >
          TECH GEAR
        </a>
        <button
          className='navbar-toggler position-absolute d-md-none collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#sidebarMenu'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <input
          className='form-control form-control-dark w-100'
          type='text'
          placeholder='Search'
        />
        <div className='navbar-nav'>
          <div className='nav-item text-nowrap'>
            <a className='nav-link px-3' href='#'>
              Sign out
            </a>
          </div>
        </div>
      </header>

      <div className='container-fluid'>
        <div className='row'>
          <nav
            id='sidebarMenu'
            className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'
          >
            <div className='position-sticky pt-3'>
              <ul class='nav flex-column' id='myTab'>
                <li class='nav-item' role='button'>
                  <a
                    class='nav-link active'
                    data-bs-toggle='tab'
                    data-bs-target='#admin_home'
                  >
                    <span className='nav-item-icon'>
                      <i class='bi bi-house'></i>
                    </span>
                    Dashboard
                  </a>
                </li>
                <li class='nav-item' role='button'>
                  <a
                    class='nav-link'
                    data-bs-toggle='tab'
                    data-bs-target='#orders'
                  >
                    <span className='nav-item-icon'>
                      <i class='bi bi-clipboard-check'></i>
                    </span>
                    Orders
                  </a>
                </li>
                <li class='nav-item' role='button'>
                  <a
                    class='nav-link'
                    data-bs-toggle='tab'
                    data-bs-target='#products'
                  >
                    <span className='nav-item-icon'>
                      <i class='bi bi-basket'></i>
                    </span>
                    Products
                  </a>
                </li>
                <li class='nav-item' role='button'>
                  <a
                    class='nav-link'
                    data-bs-toggle='tab'
                    data-bs-target='#payments'
                  >
                    <span className='nav-item-icon'>
                      <i class='bi bi-credit-card'></i>
                    </span>
                    Payments
                  </a>
                </li>
                <li class='nav-item' role='button'>
                  <a
                    class='nav-link'
                    data-bs-toggle='tab'
                    data-bs-target='#customerManagment'
                  >
                    <span className='nav-item-icon'>
                      <i class='bi bi-people'></i>
                    </span>
                    Customers Managment
                  </a>
                </li>
                <li class='nav-item' role='button'>
                  <a
                    class='nav-link'
                    data-bs-toggle='tab'
                    data-bs-target='#employeeManagment'
                  >
                    <span className='nav-item-icon'>
                      <i class='bi bi-building'></i>
                    </span>
                    Employees Managment
                  </a>
                </li>
                <li class='nav-item' role='button'>
                  <a
                    class='nav-link'
                    data-bs-toggle='tab'
                    data-bs-target='#supplierManagment'
                  >
                    <span className='nav-item-icon'>
                      <i class='bi bi-truck'></i>
                    </span>
                    Supplier Managment
                  </a>
                </li>
                <li class='nav-item' role='button'>
                  <a
                    class='nav-link'
                    data-bs-toggle='tab'
                    data-bs-target='#advertismentManagment'
                  >
                    <span className='nav-item-icon'>
                      <i class='bi bi-badge-ad'></i>
                    </span>
                    Advertisment Managment
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
            <div class='tab-content' id='myTabContent'>
              <div class='tab-pane show active' id='admin_home'>
                <AdminHome />
              </div>
              <div class='tab-pane' id='orders'>
                <Orders />
              </div>
              <div class='tab-pane' id='products'>
                <Store />
              </div>
              <div class='tab-pane' id='payments'>
                <Payments />
              </div>
              <div class='tab-pane' id='customerManagment'>
                <CustomerManagment />
              </div>
              <div class='tab-pane' id='employeeManagment'>
                <EmployeeManagment />
              </div>
              <div class='tab-pane' id='supplierManagment'>
                <SupplierManagment />
              </div>
              <div class='tab-pane' id='advertismentManagment'>
                <AdvertismentManagment />
              </div>
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  )
}

export default Dashboard;
