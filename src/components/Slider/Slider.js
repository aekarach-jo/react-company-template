import React from "react";
import { sliderData } from "../../config";

const Slider = () => {
  return (
    <section id="slider">
      <div id="home-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {sliderData.map((data, index) => (
            <div
              key={index}
              className={`${data.isActive ? "active" : ""} item`}
              style={{ backgroundImage: data.image }}
            >
              <div className="carousel-caption container">
                <div className="row">
                  <div className="col-md-8 col-sm-12 col-xs-12">
                    <h1>{data.h1}</h1>
                    <h2>{data.h2}</h2>
                    <p>{data.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <a
            className="home-carousel-left"
            href="#home-carousel"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" />
          </a>{" "}
          <a
            className="home-carousel-right"
            href="#home-carousel"
            data-slide="next"
          >
            <i className="fa fa-angle-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Slider;
