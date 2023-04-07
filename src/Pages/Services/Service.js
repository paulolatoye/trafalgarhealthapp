import React from 'react'
import './service.css'
import Line from '../Line'
import SearchDoc from '../../assets/images/serv1.png'
import OnlinePharmacy from '../../assets/images/serv2.png'
import Consultation from '../../assets/images/serv3.png'
import Details from '../../assets/images/serv4.png'
import EmergencyCare from '../../assets/images/serv5.png'
import Tracking from '../../assets/images/serv6.png'


function Service() {
  return (
    <div className='container service'>
      <div className='service-main-section text-center'>
        <div>
            <h2>Our Services</h2>
        </div>
        <Line />
        <div>
            <p>
                We provide to you the best choices for you. Adjust it to your health needs 
                and make sure your undergo treatment <br/> with our highly qualified doctors 
                you can consult with us which type of service is suitable for your health
            </p>
        </div>
    </div>

    <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-1'></div>
        
        <div className='col-sm-12 col-md-12 col-lg-10'>
            <div className='row service'>
                <div className='col-sm-12 col-md-12 col-lg-4'>
                    <div className='service-second-section mb-3'>
                        <div className='service-section-img'> <img src={SearchDoc} alt="" /></div>
                        <div className='service-section-body'>
                            <h3 className='mt-3'>Search doctor</h3>
                            <p>
                                Choose your doctor from thousands of  
                                specialist, general, and trusted hospitals
                            </p>
                        </div>
                    </div>
                </div>
            
                <div className='col-sm-12 col-md-12 col-lg-4'>
                    <div className='service-second-section'>
                        <div className='service-section-img'> <img src={OnlinePharmacy} alt="" /></div>
                        <div className='service-section-body'>
                            <h3 className='mt-3'>Online pharmacy</h3>
                            <p>
                                Buy  your medicines with our <br/>mobile application 
                                with a simple <br/> delivery system
                            </p>
                        </div>
                    </div>
                </div>
            
                <div className='col-sm-12 col-md-12 col-lg-4'>
                    <div className='service-second-section'>
                        <div className='service-section-img'> 
                            <img src={Consultation} alt="" />
                        </div>
                        <div className='service-section-body'>
                            <h3 className='mt-3'>Consultation</h3>
                            <p>
                                Free consultation with our trusted <br/>doctors and get 
                                the best <br/>recomendations
                            </p>
                        </div>
                    </div>
                </div>
            
                <div className='col-sm-12 col-md-12 col-lg-4'>
                    <div className='service-second-section'>
                        <div className='service-section-img'> <img src={Details} alt="" /></div>
                        <div className='service-section-body'>
                            <h3 className='mt-3'>Details info</h3>
                            <p>
                                Free consultation with our trusted <br/>doctors and 
                                get the best <br/> recomendations 
                            </p>
                        </div>
                    </div>
                </div>
            
                <div className='col-sm-12 col-md-12 col-lg-4'>
                    <div className='service-second-section'>
                        <div className='service-section-img'> <img src={EmergencyCare} alt="" /></div>
                        <div className='service-section-body'>
                            <h3 className='mt-3'>Emergency Care</h3>
                            <p>
                                You can get 24/7 urgent care for <br/>yourself or your
                                children and your <br/>lovely family
                            </p>
                        </div>
                    </div>
                </div>
            
                <div className='col-sm-12 col-md-12 col-lg-4'>
                    <div className='service-second-section'>
                        <div className='service-section-img'> 
                            <img src={Tracking} alt="" />
                        </div>
                        <div className='service-section-body'>
                            <h3 className='mt-3'>Tracking</h3>
                            <p> Track and save your medical history and health data</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='col-sm-12 col-md-12 col-lg-1'></div>
    </div>

    <div className='service-section-button text-center'>
        <button className='service-btn'>Learn more</button>
    </div>

    </div>
  )
}

export default Service
