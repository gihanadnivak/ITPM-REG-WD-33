import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'
import Alert from '../layout/Alert'

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    if (password !== password2) {
      setAlert('Password do not match', 'danger')
    } else {
      register({ name, email, password })
    }
  }

  return (
    <Fragment>
      <section class='vh-100 bg-light m-0'>
        <div className='row h-100 justify-content-center m-0'>
          <div class='col-md-6 align-self-center  '>
            <div className='row justify-content-center'>
              <div className='brand'>
                <img src={logo} class='rounded mx-auto d-block' alt='' />
              </div>
            </div>

            <div className='row justify-content-center'>
              <div className='container w-50 login-container'>
                <Alert />
                <div class='card-body shadow-sm p-4 mb-5 bg-body rounded'>
                  <h4 class='card-title mb-3'>Sign Up</h4>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div class='mb-3'>
                      <label for='username' class='form-label'>
                        Name
                      </label>
                      <input
                        type='name'
                        class='form-control'
                        id='username'
                        placeholder='Enter name'
                        name='name'
                        value={name}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div class='mb-3'>
                      <label for='email' class='form-label'>
                        Email
                      </label>
                      <input
                        type='email'
                        class='form-control'
                        id='email'
                        placeholder='Enter email'
                        name='email'
                        value={email}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div class='mb-3'>
                      <label for='Password1' class='form-label'>
                        Password
                      </label>
                      <input
                        type='password'
                        class='form-control'
                        id='Password1'
                        placeholder='Enter password'
                        name='password'
                        value={password}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div class='mb-3'>
                      <label for='Password2' class='form-label'>
                        Confirm Password
                      </label>
                      <input
                        type='password'
                        class='form-control'
                        id='Password2'
                        placeholder='Confirm password'
                        name='password2'
                        value={password2}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <button
                      type='submit'
                      class='btn btn-primary w-100 py-2 mt-2'
                    >
                      Register
                    </button>
                    <div class='mt-4 text-center'>
                      Have an Account? <Link to='/login'>Login</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
}

export default connect(null, { setAlert, register })(Register)
