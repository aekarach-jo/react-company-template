import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="parallex">
      <div className="container">
        <div className="quote">
          {" "}
          <i className="fa fa-quote-left" />{" "}
        </div>
        <div className="clearfix" />
        <div className="slider-text">
          <div id="owl-testi" className="owl-carousel owl-theme">
            <div className="item">
              <div className="col-md-10 col-md-offset-1">
                {" "}
                <img
                  src="images/Testimonials/02.jpg"
                  className="img-circle"
                  alt
                />
                <h5>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi.
                </h5>
                <h6>EMA JOHNSON</h6>
                <p>Web Developer</p>
              </div>
            </div>
            <div className="col-md-10 col-md-offset-1">
              {" "}
              <img
                src="images/Testimonials/03.jpg"
                className="img-circle"
                alt
              />
              <h5>
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because
                occasionally circumstances occur
              </h5>
              <h6>SAM DEEN</h6>
              <p>Web Designer</p>
            </div>
            <div className="col-md-10 col-md-offset-1">
              {" "}
              <img
                src="images/Testimonials/04.jpg"
                className="img-circle"
                alt
              />
              <h5>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas
              </h5>
              <h6>JOHN DOE</h6>
              <p>CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
