import React from "react";

import "./Travelpage.css";

const Travelpage = () => {
  return (
    <>
      <div className="t-content">
        <form action="#">
          <div className="t-center">
            <h1 className="t-margin t-font">Africa Travel Deals</h1>

            <p className="t-margin t-col">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <p>eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </p>
          </div>
          <nav className="t-flex t-nav t-width">
            <h2>DEPARTG DATE</h2>
            <h2>TRIP NAME</h2>
            <h2 className="t-days">DAYS</h2>
            <h2 className="t-right"> EUR</h2>
            <h2>ABOUT</h2>
          </nav>
          <main>
            <div className="t-flex t-margin t-main t-width">
              <label>18 SEP 2023 </label>
              <h2 className="t-orange">Zanzibar to Victoria Fall</h2>
              <label>16</label>
              <label>1.722$</label>
              <button className="t-button">View Trip</button>
            </div>

            <div className="t-flex t-margin t-main t-width">
              <label>15 SEP 2023 </label>
              <h2 className="t-orange"> Zanzibar to North Coast</h2>
              <label>20</label>
              <label>1.422$</label>
              <button className="t-button">View Trip</button>
            </div>

            <div className="t-flex t-margin t-main t-width">
              <label>15 SEP 2023 </label>
              <h2 className="t-orange">Nairobi to Nairobi Halls</h2>
              <label>15</label>
              <label>1.978$</label>
              <button className="t-button">View Trip</button>
            </div>
            <div className="t-flex t-margin t-main t-width">
              <label>15 SEP 2023 </label>
              <h2 className="t-orange">Cape Town- Cape Towns</h2>
              <label>13</label>
              <label>1.563$</label>
              <button className="t-button">View Trip</button>
            </div>
          </main>
          <div className="t-center">
            <button className="t-button t-but ">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export { Travelpage };
