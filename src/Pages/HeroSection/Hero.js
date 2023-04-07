import React from 'react'
import './hero.css'
import HeroImg from '../../assets/images/hero.png'


function Hero() {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="health">
                    <h2 className='mb-4'>Virtual Healthcare <br/>for you</h2>
                    <p className='mb-4'>
                    Trafalgar provides progressive, and affordable <br/>
                    healthcare, accessible on mobile and online <br/>
                    for everyone
                    </p>
                    <button className="hero-btn">Consult today</button>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="health-img">
                <img src={HeroImg} alt=""/>
              </div>
              
            </div>
        </div>

    </div>
  )
}

export default Hero
