import React from "react";

import "./Loreumpage.css";

const Loreumpage = () => {
  return (
    <>
      <div className="loreum-bg">
        <header className="loreum-center">
          <h1 className="loreum-margin">Contact Us</h1>
          <div className="loreum-margin">
            <p>
              Loreumipsum dolor sit amet,consectetur adipiscing elit, sed do
              eiusmod tempor incididunt at labore
            </p>
            <p>et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
        </header>
        <section className="loreum-flex loreum-margin">
          <div>
            <div className="loreum-margin">
              <h3 className="loreum-col">Address</h3>
              <label>4567 Sugar Camp Road, Owatanna,Minnesata</label>
            </div>
            <div className="loreum-margin">
              <h3 className="loreum-col">Phone</h3>
              <label>507-475-6098</label>
            </div>
            <div className="loreum-margin">
              <h3 className="loreum-col">Email</h3>
              <label>wrub76890@temparay-mailnet</label>
            </div>
          </div>
          <div className="loreum-box ">
            <h1 className="loreum-margin">Send Message</h1>
            <div className="loreum-margin">
              <h4>Full Name</h4>
              <input type="text" name="name" className="loreum-text" />
            </div>
            <div className="loreum-margin">
              <h4>Email</h4>
              <input type="email" name="e-mail" className="loreum-text" />
            </div>
            <div className="loreum-margin">
              <h4>Type your Message</h4>
              <input type="text" name="message" className="loreum-text" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export { Loreumpage };
