import React from "react";
import { aboutData } from "../../config";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>
              ABOUT <span>US</span>
            </h2>
            <div className="line" />
            <p>
              <span>
                <strong>{aboutData.caption_first}</strong>
              </span>
              {aboutData.caption_second}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ab-sec">
            <div className="col-md-6">
              <h3
                className="wow fadeInDown"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <span>{aboutData.title_first}</span>
                {aboutData.title_second}
              </h3>
              <p>
                <span>
                  <strong>{aboutData.detail_first}</strong>
                </span>
                {aboutData.detail_second}
              </p>
            </div>
            <div
              className="col-md-6 ab-sec-img wow fadeInUp"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <img src="images/Aboutus/01.jpg" alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
