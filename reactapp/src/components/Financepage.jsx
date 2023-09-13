import React from "react";

import "./Financepage.css";

const Financepage = () => {
  return (
    <>
      <div className="f-bg">
        <div className="f-flex ">
          <div className="f-col">
            <label>Finance</label>
          </div>
          <div className="f-margin">
            <label className="f-space">HOME</label>
            <label className="f-space">ABOUT</label>
            <label className="f-space">SERVICES</label>
            <label className="f-space">PORTFOUND</label>
            <label className="f-space">NEWS</label>
            <label className="f-space">CONTACT</label>
          </div>
        </div>
        <main>
          <div className="f-margin ">
            <h1>What Is a Consulting Firm & What Does</h1>
          </div>
          <div className="f-flex f-margin">
            <ul className="f-space">
              <li className="f-margin">Agile</li>
              <li className="f-margin">Cost Transformation</li>
              <li className="f-margin">Learning & Development</li>
              <li className="f-margin">Mergers and Acquisitions</li>
              <li className="f-margin">People and Organization</li>
              <li className="f-margin">Private Equity</li>
            </ul>
            <ul>
              <li className="f-margin">Mergers and Acquisitions</li>
              <li className="f-margin">Private Equity</li>
              <li className="f-margin">Operations</li>
              <li className="f-margin">Sales and Marketing</li>
              <li className="f-margin">Sustainability & Responsibility</li>
              <li className="f-margin">Transformation</li>
            </ul>
          </div>
        </main>
        <div className="f-flex">
          <div className="f-box f-space">
            <h1 className="f-margin">CONSULTING</h1>
            <p className="f-margin">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
          <div className="f-box f-space">
            <h1 className="f-margin">STRATEGY</h1>
            <p className="f-margin">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
          <div className="f-box f-space">
            <h1 className="f-margin">MISSION</h1>
            <p className="f-margin">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
          <div className="f-box">
            <h1 className="f-margin">INVESTMENT</h1>
            <p className="f-margin">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Financepage };
