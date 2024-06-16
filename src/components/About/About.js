import React from "react";

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
                <strong>L</strong>
              </span>
              orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad
              minim veniam
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
                <span>W</span>e Are Creative And Awesome
              </h3>
              <p>
                <span>
                  <strong>L</strong>
                </span>
                orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor.Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. book.{" "}
              </p>
            </div>
            <div
              className="col-md-6 ab-sec-img wow fadeInUp"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <img src="images/Aboutus/01.jpg" alt />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
