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
            <a href="#">About us</a>
            <a href="#">Service</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="mob-flex">
          <div>
            <h1>Contact</h1>
            <p>You'll called male,so lights</p>
            <p>Starts abundantly,is their</p>
            <div>
              <h2>EMAIL :</h2>
              <label>Mikael.moor@gmail.com</label>
            </div>
            <div>
              <h2>PHONE:</h2>
              <label>+7 (928)-101-20-45</label>
            </div>
            <div>
              <button>Get Direaction</button>
            </div>
          </div>

          <div>
            <p>
              I am always looking for great colaboration. Let's message me and
              make <label>somthing together!</label>
            </p>
            <div>
              <div className="m-flex">
                <div>
                  <h1>Your name(required)</h1>
                  <input type="text" placeholder="Name" name="name" required />
                </div>
                <div>
                  <h1>Your email(required)</h1>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
              </div>

              <div className="m-flex">
                <div>
                  <h1>Phone Number</h1>
                  <input type="number" placeholder="Phone" name="num" />
                </div>
                <div>
                  <h1>Choose a Budget (USD)</h1>
                  <input
                    type="text"
                    placeholder="Your Budget"
                    name="name"
                    required
                  />
                </div>
              </div>
              <div>
                <h1>Your message</h1>
                <input type="textarea" placeholder="Message" />
              </div>
              <div>
                <button>Contact Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Mobirisepage };
