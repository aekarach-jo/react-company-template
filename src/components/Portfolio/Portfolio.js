import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>
              AWESOME FEATUR<span>ES</span>
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
          <ul className="portfolio-filter">
            <li>
              <a className="active" href="#" data-filter="*">
                All Works
              </a>
            </li>
            <li>
              <a href="#" data-filter=".creative">
                Creative
              </a>
            </li>
            <li>
              <a href="#" data-filter=".corporate">
                Corporate
              </a>
            </li>
            <li>
              <a href="#" data-filter=".portfolio">
                Portfolio
              </a>
            </li>
          </ul>
          {/*/#portfolio-filter*/}
        </div>
        <div className="portfolio-items">
          <div className="col-md-4 col-sm-6 col-xs-12 portfolio-item creative">
            <div className="portfolio-item-inner">
              {" "}
              <img
                className="img-responsive"
                src="images/Portfolio/01.jpg"
                alt
              />
              <div className="portfolio-info">
                {" "}
                <a
                  className="preview"
                  href="images/Portfolio/01.jpg"
                  data-rel="prettyPhoto"
                >
                  <i className="fa fa-plus-circle" />
                </a>
                <h6>ITEM-1</h6>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          {/*/.portfolio-item*/}
          <div className="col-md-4 col-sm-6 col-xs-12 portfolio-item corporate portfolio">
            <div className="portfolio-item-inner">
              {" "}
              <img
                className="img-responsive"
                src="images/Portfolio/02.jpg"
                alt
              />
              <div className="portfolio-info">
                {" "}
                <a
                  className="preview"
                  href="images/Portfolio/02.jpg"
                  data-rel="prettyPhoto"
                >
                  <i className="fa fa-plus-circle" />
                </a>
                <h6>ITEM-2</h6>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          {/*/.portfolio-item*/}
          <div className="col-md-4 col-sm-6 col-xs-12 portfolio-item creative">
            <div className="portfolio-item-inner">
              {" "}
              <img
                className="img-responsive"
                src="images/Portfolio/03.jpg"
                alt
              />
              <div className="portfolio-info">
                {" "}
                <a
                  className="preview"
                  href="images/Portfolio/03.jpg"
                  data-rel="prettyPhoto"
                >
                  <i className="fa fa-plus-circle" />
                </a>
                <h6>ITEM-3</h6>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          {/*/.portfolio-item*/}
          <div className="col-md-4 col-sm-6 col-xs-12 portfolio-item corporate">
            <div className="portfolio-item-inner">
              {" "}
              <img
                className="img-responsive"
                src="images/Portfolio/04.jpg"
                alt
              />
              <div className="portfolio-info">
                {" "}
                <a
                  className="preview"
                  href="images/Portfolio/04.jpg"
                  data-rel="prettyPhoto"
                >
                  <i className="fa fa-plus-circle" />
                </a>
                <h6>ITEM-4</h6>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          {/*/.portfolio-item*/}
          <div className="col-md-4 col-sm-6 col-xs-12 portfolio-item creative portfolio">
            <div className="portfolio-item-inner">
              {" "}
              <img
                className="img-responsive"
                src="images/Portfolio/05.jpg"
                alt
              />
              <div className="portfolio-info">
                {" "}
                <a
                  className="preview"
                  href="images/Portfolio/05.jpg"
                  data-rel="prettyPhoto"
                >
                  <i className="fa fa-plus-circle" />
                </a>
                <h6>ITEM-5</h6>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          {/*/.portfolio-item*/}
          <div className="col-md-4 col-sm-6 col-xs-12 portfolio-item corporate">
            <div className="portfolio-item-inner">
              {" "}
              <img
                className="img-responsive"
                src="images/Portfolio/06.jpg"
                alt
              />
              <div className="portfolio-info">
                {" "}
                <a
                  className="preview"
                  href="images/Portfolio/06.jpg"
                  data-rel="prettyPhoto"
                >
                  <i className="fa fa-plus-circle" />
                </a>
                <h6>ITEM-6</h6>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          {/*/.portfolio-item*/}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
