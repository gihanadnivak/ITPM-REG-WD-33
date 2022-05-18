import React from 'react'

const Boxes = () => {
  return (
    <section className='p-2 d-flex justify-content-center'>
      <div className='container pt-2 pb-2'>
        <div className='row text-center g-4'>
          {/* start */}
          <div className='col-md '>
            <div class='card border border-0'>
              <div class='row g-0'>
                <div class='col-md-3 fs-1'>
                  <i class='bi bi-truck align-middle'></i>
                </div>
                <div class='col-md-9'>
                  <div class='card-body text-md-start'>
                    <h5 class='card-title'>Free Islandwide Delivery</h5>
                    <p class='card-text'>For orders above Rs. 10,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
          {/* start */}
          <div className='col-md'>
            <div class='card border border-0'>
              <div class='row g-0'>
                <div class='col-md-3 fs-1'>
                  <i class='bi bi-credit-card align-middle'></i>
                </div>
                <div class='col-md-9'>
                  <div class='card-body text-md-start'>
                    <h5 class='card-title'>Best Price Guarantee</h5>
                    <p class='card-text'>Lowest possible prices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
          {/* start */}
          <div className='col-md'>
            <div class='card border border-0'>
              <div class='row g-0'>
                <div class='col-md-3 fs-1'>
                  <i class='bi bi-truck align-middle'></i>
                </div>
                <div class='col-md-9'>
                  <div class='card-body text-md-start'>
                    <h5 class='card-title'>Easy Payment Plans</h5>
                    <p class='card-text'>Instalment plans, offers & more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
          {/* start */}
          <div className='col-md'>
            <div class='card border border-0'>
              <div class='row g-0'>
                <div class='col-md-3 fs-1'>
                  <i class='bi bi-chat-left-dots align-middle'></i>
                </div>
                <div class='col-md-9'>
                  <div class='card-body text-md-start'>
                    <h5 class='card-title'>After Sales Service</h5>
                    <p class='card-text'>24/7 customer support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </section>
  )
}

export default Boxes
