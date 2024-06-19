import React from "react";
import { serviceData } from "../../config";

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>
              OUR SERVI<span>CE</span>
            </h2>
            <div className="line" />
            <p>
              <span>
                <strong>{serviceData.caption_first}</strong>
              </span>
              {serviceData.caption_second}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="features-sec">
            {serviceData.list.map((data) => (
              <div
                key={data.id}
                className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp"
                data-wow-duration="300ms"
                data-wow-delay="0ms"
              >
                <div className="media service-box">
                  <div className="pull-left">
                    <i className={data.icon} />{" "}
                  </div>
                  <div className="media-body">
                    <h5 className="media-heading">{data.title}</h5>
                    <p>{data.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="experience">
          <h3
            className="wow fadeInDown"
            data-wow-duration="1000ms"
            data-wow-delay="300ms"
          >
            {serviceData.ourServices_title}
          </h3>
          <div className="col-sm-6 col-xs-12">
            {serviceData.ourServices_list.map((data) => (
              <div
                key={data.id}
                className="our-skills wow fadeInLeft"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <div
                  className="single-skill wow fadeInLeft"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <p className="lead">{data.lead}</p>
                  <div className="progress">
                    <div
                      className="progress-bar six-sec-ease-in-out"
                      role="progressbar"
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: data.value }}
                    >
                      {data.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="col-sm-6  wow fadeInUp"
            data-wow-duration="1000ms"
            data-wow-delay="600ms"
          >
            {" "}
            <img
              src="images/Service/01.png"
              className="img-responsive"
              alt
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
