import React from "react";
import "./providers.css";
import Line from "../Line";
import ProviderImg from "../../assets/images/providers.png";
import MobileAppImg from "../../assets/images/mobileApps.png";

function Providers() {
  return (
    <div className="container mt-5">
      <div className="row healthcr-provdrs">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="provider-img">
            <img src={ProviderImg} alt="" />
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="provider">
            <h2 className="mb-4">
              Leading healthcare <br />
              providers
            </h2>
            <Line />
            <p className="mb-4">
              Trafalgar provides progressive, and affordable <br />
              healthcare, accessible on mobile and online for <br />
              everyone. To us, it’s not just work. We take pride <br />
              in the solutions we deliver
            </p>
            <button className="provider-btn">Learn more</button>
          </div>
        </div>
      </div>

      <div className="row app-downld">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="health">
            <h2 className="mb-4">
              Download our <br />
              mobile apps
            </h2>
            <Line />
            <p className="mb-4">
              Our dedicated patient engagement app and <br />
              web portal allow you to access information <br />
              instantaneously (no tedeous form, long calls, <br />
              or administrative hassle) and securely
            </p>
            <button className="hero-btn">Download</button>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="health-img downl-img">
            <img src={MobileAppImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Providers;
