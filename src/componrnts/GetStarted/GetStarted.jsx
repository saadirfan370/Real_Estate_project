import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g_wrapper">
      <div className="paddings innerWidth g_container">
        <div className="flexColCenter inner_container">
          <span  className="primaryText">Get started with Dream City</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:anasirfa577@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
