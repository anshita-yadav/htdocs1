import React from "react";

import "./Register.css";

const Register = () => {
  return (
    <>
      <form>
        <div className="head-content flex-content">
          <div>
            <label className="head-nav">Home</label>
            <label className="head-nav">Page</label>
            <label className="head-nav">Add</label>
          </div>
          <div>
            <label>Info</label>
            <label className="head-nav">SignUP</label>
          </div>
        </div>
        <div className="main-content ">
          <div>
            <div className="font-content">
              <h1>Welcome to The Resigter Page</h1>
            </div>
            <p>
              Website is a hyper-media information storage system linking
              <br />
              resources around the world
            </p>
          </div>
          <div>
            <div>
              <label>Email Add</label>
              <input type="email" className="input-reg" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" className="input-reg" />
            </div>
            <div>
              <button className="but-content"> Submit</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export { Register };
