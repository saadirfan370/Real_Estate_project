import React from "react";
import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSetting } from "../../utils/common";

const Residencies = () => {
  return (
    <section className="r-wrapper"id="Residencies">
      <div className="paddings innerWidth r_container">
        <div className="r_head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSetting}>
          <SliferButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r_card">
                <img src={card.image} alt="home" />

                <span className="secondaryText r_price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliferButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flexCenter r_button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  );
};
