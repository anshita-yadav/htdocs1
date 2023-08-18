import React from "react";

import "./Datapage.css";

const Datapage = () => {
  return (
    <>
      <div className="data-content">
        <header className="data-flex">
          <div>
            <label className="data-col data-size">AnyWhere App</label>
          </div>
          <div>
            <label className="data-head">Home</label>
            <label className="data-head">Join</label>
          </div>
        </header>
        <main>
          <div className="data-margin">
            <h1 className="data-start data-grey">START FOR FREE</h1>
            <div>
              <h2 className="data-col data-font">Create new account.</h2>
              <p className="data-grey">
                Already A Member ?
                <a
                  href="https://www.google.co.in/"
                  className="data-margin  data-col"
                >
                  Log In
                </a>
              </p>
            </div>
          </div>
          <div className="data-width">
            <input type="text" placeholder="First name" name="fname" />
            <input type="text" placeholder="Last name" name="lname" />
          </div>
          <div className="data-type data-width">
            <input
              type=" email"
              placeholder="micha.masiak@anywhere.co"
              name="email"
            />
          </div>
          <div className="data-type data-width">
            <input type="password" placeholder="Password" name="password" />
          </div>
          <div className="data-width">
            <input type="text" placeholder="change method" name="mth" />
            <button className="data-but">Create account</button>
          </div>
        </main>
      </div>
    </>
  );
};

export { Datapage };
