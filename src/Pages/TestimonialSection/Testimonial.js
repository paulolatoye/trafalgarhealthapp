import React from 'react'
import './testimonial.css'
import WhiteLine from '../WhiteLine'
import TestimonialImage from '../../assets/images/Mask Group.png'

function Testimonial() {
  return (
    <div className='container mt-5'>
        <div className="testimonial-row">
            <div className='testimonial-header'>
                <h2>What our customer are saying</h2>
                <WhiteLine />
            </div>

            <div className='row customer'>
                <div className='col-6 testi-client'>
                    <img src={TestimonialImage} alt="" ></img>
                    <div className='client-info'>
                        <h4>Edward Newgate</h4>
                        <h5>Founder Circle</h5>
                    </div>
                </div>

                <div className='col-6 testi-para'>
                    <p>
                        “Our dedicated patient engagement app <br/> and 
                        web portal allow you to access information <br/> instantaneously (no tedeous form, long calls,<br/> 
                        or administrative hassle) and securely”
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
