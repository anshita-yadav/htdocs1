import React from "react";
import "./Geekspage.css";

const Geekspage = () => {
  return (
    <>
      <form className="font-family">
        <header className="header flex-style">
          <div>
            <label className="left-margin">GeeksforGeeks</label>
            <label className="left-margin">Home</label>
            <label className="left-margin">About</label>
            <label className="left-margin">Practice</label>
            <label className="left-margin">Tutorials</label>
          </div>
          <div>
            <label>Contact</label>
          </div>
        </header>
        <main>
          <div className="main-center">
            <h2 className="geek-font col-grey">GeeksforGeeks</h2>
            <p className="col-green">React Suite Container Login Page Layout</p>
          </div>
          <div className="nav-box">
            <div>
              <h2 className="log-font top-text ">Login</h2>
            </div>
            <div>
              <h4 className="col-grey top-text">Email</h4>
              <input
                type="email"
                id="e-mail"
                name="email"
                className="input-style  "
              />
            </div>
            <div>
              <h4 className="col-grey top-text">Password</h4>
              <input
                type="password"
                id="passcode"
                name="passcode"
                className="input-style  col-grey"
              />
            </div>

            <div>
              <button className="button-container top-text">Sign in</button>
            </div>
          </div>
        </main>
        <div className="col-grey main-center top-text">
          <label>@GeeksforGeeks</label>
        </div>
      </form>
    </>
  );
};

export { Geekspage };
