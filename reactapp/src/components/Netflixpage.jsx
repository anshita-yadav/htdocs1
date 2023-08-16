import React from "react";

import "./Netflixpage.css";

const Netflixpage = () => {
  return (
    <>
      <div id="body">
        <div id="shade">
          <header className="head-space">
            <div>
              <label className=" netflix-size">NETFLIX</label>
            </div>
            <div>
              <div>
                <select className="selector col-white height">
                  <option>Language</option>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Telgu</option>
                  <option>Tamil</option>
                </select>
                <button className=" sign-text height but col-white">
                  Sigin In
                </button>
              </div>
            </div>
          </header>
          <main className="col-white">
            <div>
              <h1>Unlimited movies, TV shows and more</h1>
              <p className="margin-top para">Watch anywhere. Cancel anytime.</p>
            </div>
            <p className="margin-top para">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </main>

          <div className="col-white margin-top">
            <input
              type="email"
              placeholder="Enter Email address"
              className="input-text input-height"
            />
            <button className="but input-height">
              Get Started <span className=""></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Netflixpage };
