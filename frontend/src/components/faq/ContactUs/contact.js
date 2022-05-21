import React from 'react'
import './contact.css'
import emailjs from 'emailjs-com'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import '../faq.css'
import { useSnackbar } from 'notistack'

const ContactUs = () => {
  const { enqueueSnackbar } = useSnackbar()
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_9wekzs2',
        'template_kxuu8bg',
        e.target,
        'user_bul4bVluweEoVpOi8bsNW'
      )
      .then(
        (result) => {
          console.log(result.text)
          enqueueSnackbar('You have sent an email', {
            variant: 'success',
            autoHideDuration: 3000,
          })
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <body id='contact-us-background-img34'>
      <Navbar />

      <section>
        <nav class='navbar navbar-expand-lg navbar-light bg-warning'>
          <div class='container-md '>
            <a class='navbar-brand' href='#'>
              Contact Us
            </a>
          </div>
        </nav>
        <div class='container '>
          <div class='row mt-5 mb-5'>
            <div class='col'>
              <h3 class='h3 text-start'>
                A Creator-friendly customer support team , that's always just a
                cliick away If you have any questions or quries a member of
                staff will always be happy to help . Feel free to contact us by
                telephone or email and we will be sure to get back to you as
                soon as possible
              </h3>
            </div>
            <div class='col px-4 ms-5'>
              <form>
                <div class='mb-3'>
                  <label class='form-label'>Name</label>
                  <input
                    type='text'
                    class='form-control'
                    name='name'
                    required
                  />
                </div>

                <div class='mb-3'>
                  <label class='form-label'>Email address</label>
                  <input
                    type='email'
                    name='email'
                    class='form-control'
                    required
                  />
                  <div id='emailHelp' class='form-text'>
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class='mb-3'>
                  <label class='form-label'>Subject</label>
                  <input
                    name='subject'
                    type='text'
                    class='form-control'
                    required
                  />
                </div>
                <div class='mb-3'>
                  <label class='form-label'>Message</label>
                  <textarea
                    type='text'
                    class='form-control '
                    rows='3'
                    name='message'
                    required
                  />
                </div>

                <div class='container'>
                  <div class='row'>
                    <div class='col-2 mx-4'>
                      <button type='clear' class='btn btn-primary px-4'>
                        clear
                      </button>
                    </div>

                    <div class='col-2 mx-4'>
                      <button type='submit' class='btn btn-danger px-4'>
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </body>
  )
}

export default ContactUs
