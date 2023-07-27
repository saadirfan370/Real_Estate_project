import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f_wrapper">
      <div className="paddings innerWidth flexCenter f_container">
        {/* left side */}
        <div className="flexColStart f_left">
          <img src="./logo2.png" alt="logo" width={120} />

          <span className="secondaryText">
            Our vision is to make all people
            <br />
            the best place to live for them.
          </span>
        </div>
        <div className="flexColStart f_right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New Karachi, FL 4572, Pak</span>

          <div className="flexCenter f_menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
