import React from "react";
import { funFactData } from "../../config";

const FunFacts = () => {
  return (
    <section id="fun-facts">
      <div className="container">
        <div className="row">
          {funFactData.map((data) => (
            <div key={data.id} className="col-xs-12 col-sm-4 col-md-4">
              <div className="fun-fact text-center">
                <h3>
                  <i className={data.icon} />
                  <span className="timer">{data.value}</span>
                </h3>
                <h6>{data.description}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
