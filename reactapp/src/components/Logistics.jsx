import React from "react";

import "./Logistics.css";

const Logistics = () => {
  return (
    <>
      <div className="log-flex log-head log-top">
        <div>
          <label>Logistics</label>
        </div>
        <div>
          <label className="log-margin">About</label>
          <label className="log-margin">Page</label>
          <label className="log-margin">Contact</label>
        </div>
      </div>
      <div className="log-bg log-top">
        <div className="log-font">
          <h1>Innovation and Discovery</h1>
        </div>
        <div className="log-para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl
            elit, varius ut magna vel, tincidunt iaculis sem.{" "}
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </p>
        </div>
        <div>
          <button className="log-but">Sig up</button>
        </div>
      </div>
      <div className="log-flex log-top">
        <div>
          <h1>Contacts</h1>
          <h5>123-456-78901</h5>
          <h3>London, 51 Street, 43</h3>
          <h3>name@site.com</h3>
        </div>
        <div>
          <h1>Newsletter</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
            <p>Debitis quisquam hic minima officiis labore.</p>{" "}
            <p>Autem iste maiores, impedit quasi, incidunt voluptatibus.</p>
          </p>
        </div>
      </div>
    </>
  );
};

export { Logistics };
