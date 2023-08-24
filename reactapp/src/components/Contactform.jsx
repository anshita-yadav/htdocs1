import React from "react";

import "./Contactform.css";

const Contactform = () => {
  return (
    <>
      <form action="#">
        <div className="cont-bg">
          <main>
            <div className="cont-flex cont-head">
              <h1>Start Your Project</h1>
              <p className="cont-col">
                Start the conversation. We combine best-in-category
                <p>
                  engineering, product design, and design thinking to create
                </p>
                engaging and emotionally connected products.
              </p>
              <label>All Other Inquiries please email:</label>
            </div>
            <hr className="cont-margin" />

            <div className="cont-flex cont-margin ">
              <h1 className="cont-title">CONTACT-FORM</h1>
            </div>

            <div className="cont-flex ">
              <div>
                <h1 className="cont-margin">First Name</h1>
                <input
                  type="text"
                  placeholder="Enter your First Name"
                  name="fname"
                  className="cont-line"
                />
              </div>
              <div>
                <h1 className="cont-margin">Last Name</h1>
                <input
                  type="text"
                  placeholder="Enter your Last Name"
                  name="lname"
                  className="cont-line"
                />
              </div>
            </div>

            <div className="cont-flex ">
              <div>
                <h1 className="cont-margin">Email</h1>
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  name="email"
                  className="cont-line"
                />
              </div>
              <div>
                <h1 className="cont-margin">Phone</h1>
                <input
                  type="text"
                  placeholder="Enter your LPhone(eg +456321)"
                  name="phone"
                  className="cont-line"
                />
              </div>
            </div>
            <div className="cont-flex">
              <div>
                <h1 className="cont-margin">Message</h1>
                <input
                  type=" text"
                  placeholder="Enter your message"
                  name="mssg"
                  className="cont-line"
                />
              </div>
              <div>
                <h1 className="cont-margin">Company</h1>
                <input type="text" name="company" className="cont-line" />
              </div>
            </div>
            <div className="cont-flex">
              <button className="cont-button">Submit</button>
            </div>
          </main>
        </div>
      </form>
    </>
  );
};

export { Contactform };
