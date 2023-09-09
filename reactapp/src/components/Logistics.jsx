import React from "react";

import "./Logistics.css";

const Logistics = () => {
  return (
    <>
      <div className="log-flex">
        <div>
          <h1>
            <a>Home</a>
          </h1>
        </div>
        <div>
          <select>
            <option>Live Demo</option>
          </select>

          <select>
            <option>Demo Block</option>
          </select>
        </div>
      </div>
      <div className="log-bg">
        <div>
          <h1>Innovation and Discovery</h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl
            elit, varius ut magna vel, tincidunt iaculis sem.{" "}
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </p>
        </div>
        <div>
          <button>Sig up</button>
          <button>
            <a>Learn </a>
          </button>
        </div>
      </div>
      <div className="log-flex">
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
