import React from 'react'
import "./footer.css"
import LOGO from "../../assets/images/logo.png"
function Footer() {
  return (
    <div className='gfd'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col- md-12 col-lg-6 '>
                    <img src={LOGO} alt="" className='mt-5'/>
                    <p className='mt-5 ada'>Trafalgar provides progressive, and affordable <br/> healthcare,
                                accessible on mobile and online <br/> for everyone</p>
                    <p className='mt-4 ada'>©Trafalgar PTY LTD 2020. All rights reserved</p>
                </div>
            
                <div className='col-sm-12 col- md-12 col-lg-2'>
                    <ul className='sdg'>
                    <h4 className='mt-5 mb-4'>Company</h4>
                    <li className="list">
                            <a className="link ada" href="/#">About</a>
                    </li>
                    <li className="list">
                            <a className="link ada" href="/#">Testimonials</a>
                    </li>
                    <li className="list">
                            <a className="link ada" href="/#">Find a doctor</a>
                    </li>
                    <li className="list">
                            <a className="link ada" href="/#">Apps</a>
                    </li>
                    </ul>
                </div>
            
                <div className='col-sm-12 col- md-12 col-lg-2 '>
                    <ul className='sdg'>
                        <h4 className='mt-5 mb-4'>Region</h4>
                        <li className="list">
                            <a className="link ada" href="/#">Indonesia</a>
                        </li>
                        <li className="list">
                            <a className="link ada" href="/#">Singapore</a>
                        </li>
                        <li className="list">
                            <a className="link ada" href="/#">Hongkong</a>
                        </li>
                        <li className="list">
                            <a className="link ada" href="/#">Canada.</a>
                        </li>
                    </ul>
                </div>
            
                <div className='col-sm-12 col- md-12 col-lg-2 '>
                    <ul className='sdg'>
                        <h4 className='mt-5 mb-4'>Help</h4>
                        <li className="list">
                            <a className="link ada" href="/#">Help center</a>
                        </li>
                        <li className="list">
                            <a className="link ada" href="/#">Contact support</a>
                        </li>
                        <li className="list">
                            <a className="link ada" href="/#">Instruction</a>
                        </li>
                        <li className="list">
                            <a className="link ada" href="/#">How it works.</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Footer