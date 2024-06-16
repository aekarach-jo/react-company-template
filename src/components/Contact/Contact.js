import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>
              CONTACT <span>US</span>
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
        <div className="text-center">
          <div className="col-md-6 col-sm-6 contact-sec-1">
            <h4>
              CONTACT IN<span>FO</span>
            </h4>
            <ul className="contact-form">
              <li>
                <i className="fa fa-map-marker" />
                <h6>
                  <strong>Address:</strong> No 123 , Wallstreet, India{" "}
                </h6>
              </li>
              <li>
                <i className="fa fa-envelope" />
                <h6>
                  <strong>Mail Us:</strong> <a href="#">Info@yourdomain.com</a>
                </h6>
              </li>
              <li>
                <i className="fa fa-phone" />
                <h6>
                  <strong>Phone:</strong> +91 123-456-7890{" "}
                </h6>
              </li>
              <li>
                <i className="fa fa-wechat" />
                <h6>
                  <strong>Website:</strong> <a href="#">www.Cosmix.com</a>{" "}
                </h6>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-6">
            <form
              id="main-contact-form"
              name="contact-form"
              method="post"
              action="#"
            >
              <div
                className="row  wow fadeInDown"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  required="required"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows={4}
                  placeholder="Enter your message"
                  required="required"
                  defaultValue={""}
                />
              </div>
              <a className="btn-send col-md-12 col-sm-12 col-xs-12" href="#">
                Send Now
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
