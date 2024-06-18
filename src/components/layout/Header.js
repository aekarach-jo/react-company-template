import React from "react";

const Header = () => {
  return (
    <header id="menu">
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-between">
            <div className="navbar-header navbar-m">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>{" "}
                <span className="icon-bar" /> <span className="icon-bar" />{" "}
                <span className="icon-bar" />{" "}
              </button>
              <a className="navbar-brand" href="#menu">
                {/* Wolf Delelopment */}
                <img src="images/Logo/wolf.png" alt />
              </a>
            </div>
            <div
              className="collapse navbar-collapse navbar-m"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li className="active">
                  <a className="scroll" href="#menu">
                    Home
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#service">
                    Service
                  </a>
                </li>
                {/* <li>
                  <a className="scroll" href="#features">
                    Features
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#team">
                    Team
                  </a>
                </li>*/}
                <li>
                  <a className="scroll" href="#blog">
                    Blog
                  </a>
                </li> 
                <li>
                  <a className="scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
