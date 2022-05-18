import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('SUCCESS')
  }

  return (
    <Fragment>
      <section className='vh-100 bg-light m-0'>
        <div className='row h-100 justify-content-center m-0'>
          <div className='col-md-6 align-self-center  '>
            <div className='row justify-content-center'>
              <div className='brand'>
                <img
                  src={logo}
                  className='rounded mx-auto d-block'
                  alt='logo'
                />
              </div>
            </div>

            <div className='row justify-content-center'>
              <div className='container w-50 login-container'>
                <div className='card-body shadow-sm p-4 mb-5 bg-body rounded'>
                  <h4 className='card-title mb-3'>Login</h4>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className='mb-3'>
                      <label for='exampleInputEmail1' className='form-label'>
                        Email address
                      </label>
                      <input
                        type='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        name='email'
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                      />
                      <div id='emailHelp' className='form-text'>
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className='mb-3'>
                      <label for='exampleInputPassword1' className='form-label'>
                        Password
                      </label>
                      <input
                        type='password'
                        className='form-control'
                        id='exampleInputPassword1'
                        name='password'
                        value={password}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                    <button
                      type='submit'
                      className='btn btn-primary w-100 py-2 mt-2'
                    >
                      Login
                    </button>
                    <div className='mt-4 text-center'>
                      Don't have an account?{' '}
                      <Link to='/register'>Create One</Link>
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

export default Login
