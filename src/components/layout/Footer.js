import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="bg-sec">
          <div className="container">
            <h2>
              LOOKING FORWARD TO <strong>HEARING </strong>FROM YOU!
            </h2>
          </div>
        </div>
      </footer>

      <footer id="footer-down">
        <h2>Follow Us On</h2>
        <ul className="social-icon">
          <li className="facebook hvr-pulse">
            <a href="#">
              <i className="fa fa-facebook-f" />
            </a>
          </li>
          <li className="twitter hvr-pulse">
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li className="linkedin hvr-pulse">
            <a href="#">
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li className="google-plus hvr-pulse">
            <a href="#">
              <i className="fa fa-google-plus" />
            </a>
          </li>
          <li className="youtube hvr-pulse">
            <a href="#">
              <i className="fa fa-youtube" />
            </a>
          </li>
          <li className="instagram hvr-pulse">
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li className="behance hvr-pulse">
            <a href="#">
              <i className="fa fa-behance" />
            </a>
          </li>
        </ul>
        <p>
          {" "}
          © Copyright 2016 ProjectJKS - Created By :{" "}
          <a href="/" target="_blank">
            Aekarach ProjectJKS
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
