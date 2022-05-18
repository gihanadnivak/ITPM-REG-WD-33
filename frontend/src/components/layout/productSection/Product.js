import React from 'react'
import TVimage from '../../../img/tv.jpg'

const Product = () => {
    return (
        <div>
            <div class='card'>
                <img src={TVimage} className='card-img-top' alt='...'/>
                <div className='card-body'>
                    <h5 className='card-title'>Rs 34,990.00</h5>
                    <h6 className='card-title'>SAMSUNG HD LED TV 32" (UA32N4000AR)</h6>
                    <p className='card-text'> SAMSUNG</p>
                </div>
            </div>
        </div>
    )
}

export default Product
