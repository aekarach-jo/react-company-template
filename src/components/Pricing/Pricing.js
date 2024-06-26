import React from "react";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>
              PRICE PACKAG<span>ES</span>
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
          <div className="col-sm-6 col-md-3">
            <div
              className="wow zoomIn"
              data-wow-duration="400ms"
              data-wow-delay="0ms"
            >
              <ul className="pricing">
                <li className="plan-header">
                  <div className="price-duration">
                    <div className="price"> $39 </div>
                    <div className="duration"> per month </div>
                  </div>
                  <div className="plan-name"> Starter </div>
                </li>
                <li>
                  <strong>1</strong> DOMAIN
                </li>
                <li>
                  <strong>100GB</strong> DISK SPACE
                </li>
                <li>
                  <strong>UNLIMITED</strong> BANDWIDTH
                </li>
                <li>SHARED SSL CERTIFICATE</li>
                <li>
                  <strong>10</strong> EMAIL ADDRESS
                </li>
                <li>
                  <strong>24/7</strong> SUPPORT
                </li>
                <li>
                  <a className="btn-order" href="#">
                    Order Now
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div
              className="wow zoomIn"
              data-wow-duration="400ms"
              data-wow-delay="200ms"
            >
              <ul className="pricing">
                <li className="plan-header">
                  <div className="price-duration">
                    <div className="price"> $69 </div>
                    <div className="duration"> per month </div>
                  </div>
                  <div className="plan-name"> Business </div>
                </li>
                <li>
                  <strong>3</strong> DOMAIN
                </li>
                <li>
                  <strong>300GB</strong> DISK SPACE
                </li>
                <li>
                  <strong>UNLIMITED</strong> BANDWIDTH
                </li>
                <li>SHARED SSL CERTIFICATE</li>
                <li>
                  <strong>30</strong> EMAIL ADDRESS
                </li>
                <li>
                  <strong>24/7</strong> SUPPORT
                </li>
                <li>
                  <a className="btn-order" href="#">
                    Order Now
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div
              className="wow zoomIn"
              data-wow-duration="400ms"
              data-wow-delay="400ms"
            >
              <ul className="pricing">
                <li className="plan-header">
                  <div className="price-duration">
                    <div className="price"> $99 </div>
                    <div className="duration"> per month </div>
                  </div>
                  <div className="plan-name"> Pro </div>
                </li>
                <li>
                  <strong>5</strong> DOMAIN
                </li>
                <li>
                  <strong>500GB</strong> DISK SPACE
                </li>
                <li>
                  <strong>UNLIMITED</strong> BANDWIDTH
                </li>
                <li>SHARED SSL CERTIFICATE</li>
                <li>
                  <strong>50</strong> EMAIL ADDRESS
                </li>
                <li>
                  <strong>24/7</strong> SUPPORT
                </li>
                <li>
                  <a className="btn-order" href="#">
                    Order Now
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div
              className="wow zoomIn"
              data-wow-duration="400ms"
              data-wow-delay="600ms"
            >
              <ul className="pricing">
                <li className="plan-header">
                  <div className="price-duration">
                    <div className="price"> $199 </div>
                    <div className="duration"> per month </div>
                  </div>
                  <div className="plan-name"> Ultra </div>
                </li>
                <li>
                  <strong>10</strong> DOMAIN
                </li>
                <li>
                  <strong>1000GB</strong> DISK SPACE
                </li>
                <li>
                  <strong>UNLIMITED</strong> BANDWIDTH
                </li>
                <li>SHARED SSL CERTIFICATE</li>
                <li>
                  <strong>100</strong> EMAIL ADDRESS
                </li>
                <li>
                  <strong>24/7</strong> SUPPORT
                </li>
                <li>
                  <a className="btn-order" href="#">
                    Order Now
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
