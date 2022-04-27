import React, { Fragment } from 'react'
import Navbar from '../layout/Navbar'

const Profile = () => {
  return (
    <Fragment>
      <Navbar />
      <section className='bg-light pb-5'>
        <section className='position-relative Account-banner bg-warning mt-5'>
          <div className='container fs-3 position-absolute top-50 start-50 translate-middle'>
            <nav>
              <ol class='breadcrumb'>
                <li class='breadcrumb-item'>Home</li>
                <li class='breadcrumb-item active'>My account</li>
              </ol>
            </nav>
          </div>
        </section>
        <section className='bg-light mt-5 mb-5'>
          <div className='container h-100 shadow p-5 pt-4 mb-5'>
            <div className='h2 mb-4'>Account Information</div>
            <form>
              <div class='row mb-3'>
                <label for='name' class='col-sm-2 col-form-label'>
                  Name
                </label>
                <div class='col-sm-10'>
                  <input type='name' class='form-control' id='name' />
                </div>
              </div>
              <div class='row mb-3'>
                <label for='email' class='col-sm-2 col-form-label'>
                  Email
                </label>
                <div class='col-sm-10'>
                  <input type='email' class='form-control' id='email' />
                </div>
              </div>
              <div class='row mb-3'>
                <label for='mobile' class='col-sm-2 col-form-label'>
                  Mobile Number
                </label>
                <div class='col-sm-10'>
                  <input type='number' class='form-control' id='mobile' />
                </div>
              </div>
              <div class='row mb-3'>
                <label for='birthday' class='col-sm-2 col-form-label'>
                  Birthday
                </label>
                <div class='col-sm-10'>
                  <input type='date' class='form-control' id='birthday' />
                </div>
              </div>
              <fieldset class='row mb-3'>
                <legend class='col-form-label col-sm-2 pt-0'>Gender</legend>
                <div class='col-sm-10'>
                  <div class='form-check'>
                    <input
                      class='form-check-input'
                      type='radio'
                      name='gridRadios'
                      id='gridRadios1'
                      value='option1'
                      checked
                    />
                    <label class='form-check-label' for='gridRadios1'>
                      Male
                    </label>
                  </div>
                  <div class='form-check'>
                    <input
                      class='form-check-input'
                      type='radio'
                      name='gridRadios'
                      id='gridRadios2'
                      value='option2'
                    />
                    <label class='form-check-label' for='gridRadios2'>
                      Female
                    </label>
                  </div>
                </div>
              </fieldset>

              <button type='submit' class='btn btn-primary'>
                Update Account
              </button>
            </form>
          </div>
        </section>
      </section>
    </Fragment>
  )
}

export default Profile
