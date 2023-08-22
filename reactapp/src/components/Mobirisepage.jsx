import React from "react";

import "./Mobirisepage.css";

const Mobirisepage = () => {
  return (
    <>
      <div className="mob-bg">
        <div className="mob-flex mob-space mob-head">
          <div>
            <h1>Mobrise</h1>
          </div>
          <div>
            <a href="https://www.google.co.in/" className="mob-grey">
              About us
            </a>
            <a href="https://www.google.co.in/" className="mob-text mob-grey">
              Service
            </a>
            <a href="https://www.google.co.in/" className="mob-text mob-grey">
              Contact
            </a>
          </div>
        </div>

        <div className="mob-flex">
          <div>
            <div>
              <h1 className="mob-top mob-contact">Contact</h1>
              <p className="mob-top mob-grey">You'll called male,so lights</p>
              <p className="mob-grey">Starts abundantly,is their</p>
            </div>
            <div>
              <h2 className="mob-top mob-grey">EMAIL :</h2>
              <label className="mob-top">Mikael.moor@gmail.com</label>
            </div>
            <div>
              <h2 className="mob-top mob-grey">PHONE:</h2>
              <label className="mob-top">+7 (928)-101-20-45</label>
            </div>
            <div className="mob-top ">
              <button className="mob-button">Get Direaction</button>
            </div>
          </div>

          <div>
            <p className="mob-margin mob-text mob-font">
              I am always looking for great colaboration. Let's message me and
              make <label className="mob-col">somthing together!</label>
            </p>
            <div>
              <div className="m-flex">
                <div className="mob-margin">
                  <h1 className="mob-text">Your name*</h1>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                    className="mob-input"
                  />
                </div>
                <div className="mob-margin">
                  <h1 className="mob-text">Your email*</h1>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    required
                    className="mob-input"
                  />
                </div>
              </div>

              <div className="m-flex">
                <div className="mob-margin">
                  <h1 className="mob-text">Phone Number</h1>
                  <input
                    type="number"
                    placeholder="Phone"
                    name="num"
                    className="mob-input"
                  />
                </div>
                <div className="mob-margin">
                  <h1 className="mob-text">Choose a Budget (USD)</h1>
                  <input
                    type="text"
                    placeholder="Your Budget"
                    name="name"
                    required
                    className="mob-input"
                  />
                </div>
              </div>
              <div className="mob-margin">
                <h1 className="mob-text">Your message</h1>
                <input
                  type="text"
                  placeholder="Message"
                  className="mob-input mob-width"
                />
              </div>
              <div className="mob-text">
                <button className="mob-but"> Contact Me</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mob-margin mob-font mob-text">
            <h1>Experience</h1>
          </div>
          <div className="mob-flex mob-space mob-top mob-text">
            <h2 className="mob-grey">2010-2012</h2>
            <h2>Greaphic Designer, art and Co</h2>
            <p>
              Which firmament dominion first rule and tree. The seas he i were
              cattle Under living, It place.
            </p>
          </div>

          <div className="mob-flex mob-space mob-top mob-text">
            <h2 className="mob-grey">2012-2016</h2>
            <h2>UX/UI Designer's,Behance Inc.</h2>
            <p>
              Rule bearing whales. Created gathering blessed, sixth likeness
              male. Over were you select.
            </p>
          </div>
          <div className="mob-flex mob-space mob-top mob-text">
            <h2 className="mob-grey">2016-2019</h2>
            <h2>Marketing Manager,Ox Identity</h2>
            <p>
              Firmament itself rule their evening, which moved very night so
              great them cattle bearing so.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Mobirisepage };
