import React from "react";
import "./footer.css";
import LOGO from "../../assets/images/logo.png";
function Footer() {
  return (
    <div className="gfd">
      <div className="container">
        <div className="row footer-row">
          <div className="col-sm-12 col- md-12 col-lg-6 footer-col">
            <img src={LOGO} alt="" className="mt-5" />
            <p className="mt-5 ada">
              Trafalgar provides progressive, and affordable <br /> healthcare,
              accessible on mobile and online <br /> for everyone
            </p>
            <p className="mt-4 ada">
              ©Trafalgar PTY LTD 2020. All rights reserved
            </p>
          </div>

          <div className="col-sm-12 col- md-12 col-lg-2 footer-col">
            <ul className="sdg sdg-1">
              <h4 className="mt-5 mb-4">
                <b>Company</b>
              </h4>
              <li className="list">
                <a className="link ada" href="/#">
                  About
                </a>
              </li>
              <li className="list">
                <a className="link ada" href="/#">
                  Testimonials
                </a>
              </li>
              <li className="list">
                <a className="link ada" href="/#">
                  Find a doctor
                </a>
              </li>
              <li className="list">
                <a className="link ada" href="/#">
                  Apps
                </a>
              </li>
            </ul>
          </div>

          <div className="col-sm-12 col- md-12 col-lg-2 footer-col">
            <ul className="sdg sdg-2">
              <h4 className="mt-5 mb-4">
                <b>Region</b>
              </h4>
              <li className="list">
                <a className="link ada" href="/#">
                  Indonesia
                </a>
              </li>
              <li className="list">
                <a className="link ada" href="/#">
                  Singapore
                </a>
              </li>
              <li className="list">
                <a className="link ada" href="/#">
                  Hongkong
                </a>
              </li>
              <li className="list">
                <a className="link ada" href="/#">
                  Canada.
                </a>
              </li>
            </ul>
          </div>

          <div className="col-sm-12 col- md-12 col-lg-2 footer-col">
            <ul className="sdg sdg-3">
              <h4 className="mt-5 mb-4">
                <b>Help</b>
              </h4>
              <li className="list">
                <a className="link ada" href="/#">
                  Help center
                </a>
              </li>
              <li className="list">
                <a className="link ada" href="/#">
                  Contact support
                </a>
              </li>
              <li className="list">
                <a className="link ada" href="/#">
                  Instruction
                </a>
              </li>
              <li className="list">
                <a className="link ada" href="/#">
                  How it works.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
