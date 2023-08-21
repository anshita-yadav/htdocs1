import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <form action="#">
        <div className="main-content">
          <h1 className="head-content">Login Page</h1>

          <div className="box-content">
            <div className="margin-content">
              <label>Name</label>
              <input type="text" className="flex-content input" />
            </div>
            <div className="margin-content">
              <label>Surname</label>
              <input
                type="text"
                id="sur"
                name="sunm"
                className="flex-content input"
              />
            </div>

            <div className="margin-content">
              <label>Password</label>
              <input
                type="password"
                id="pass"
                name="pass"
                className="flex-content input"
              />
            </div>

            <div className="margin-content">
              <label>Email</label>
              <input
                type="email"
                id="mail"
                name="mail"
                className="flex-content input"
              />
            </div>

            <div className="margin-content">
              <input
                type="submit"
                value="Login"
                className="but-content flex-content input"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export { Login };
