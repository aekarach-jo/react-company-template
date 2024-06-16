import React from "react";

const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>
              LATEST BL<span>OG</span>
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
          <div className="col-md-12">
            <div className="col-md-4 blog-sec">
              <div className="blog-info">
                <img src="images/Blog/1.jpg" className="img-responsive" alt />
                <div className="data-meta">
                  <h4>Jan</h4>
                  <strong>10</strong>
                  <br />
                  2016
                </div>
                <a href="#">
                  <h5>Sed ut perspiciatis unde omnis</h5>
                </a>
                <ul className="blog-icon">
                  <li>
                    <i className="fa fa-pencil" />
                    <a href="#">
                      <h6>John</h6>
                    </a>
                  </li>
                  <li className="comment">
                    <i className="fa fa-comment" />
                    <a href="#">
                      <h6>13</h6>
                    </a>
                  </li>
                </ul>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate.
                </p>
                <a href="#" className="btn-blg">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-4 blog-sec">
              <div className="blog-info">
                {" "}
                <img src="images/Blog/2.jpg" className="img-responsive" alt />
                <div className="data-meta">
                  <h4>Jan</h4>
                  <strong>20</strong>
                  <br />
                  2016
                </div>
                <a href="#">
                  <h5>Sed ut perspiciatis unde omnis</h5>
                </a>
                <ul className="blog-icon">
                  <li>
                    <i className="fa fa-pencil" />
                    <a href="#">
                      <h6>Maria</h6>
                    </a>
                  </li>
                  <li className="comment">
                    <i className="fa fa-comment" />
                    <a href="#">
                      <h6>04</h6>
                    </a>
                  </li>
                </ul>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate.
                </p>
                <a href="#" className="btn-blg">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-4 blog-sec">
              <div className="blog-info">
                {" "}
                <img src="images/Blog/3.jpg" className="img-responsive" alt />
                <div className="data-meta">
                  <h4>Jan</h4>
                  <strong>31</strong>
                  <br />
                  2016
                </div>
                <a href="#">
                  <h5>Sed ut perspiciatis unde omnis</h5>
                </a>
                <ul className="blog-icon">
                  <li>
                    <i className="fa fa-pencil" />
                    <a href="#">
                      <h6>Bear</h6>
                    </a>
                  </li>
                  <li className="comment">
                    <i className="fa fa-comment" />
                    <a href="#">
                      <h6>05</h6>
                    </a>
                  </li>
                </ul>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate.
                </p>
                <a href="#" className="btn-blg">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
