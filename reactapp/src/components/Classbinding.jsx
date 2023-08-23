import { useState } from "react";
import "./Classbinding.css";

const ClassBinding = () => {
  const [colorTheme, setColorTheme] = useState("light-theme");
  const [buttonTheme, setButtonTheme] = useState("button-light");

  function handleThemeChange(e) {
    if (e.target.checked) {
      setColorTheme("dark-theme");
      setButtonTheme("button-dark");
    } else {
      setColorTheme("light-theme");
      setButtonTheme("button-light");
    }
  }

  return (
    <div className="class-center">
      <div style={{ height: "100vh" }}>
        <form className={colorTheme}>
          <div>
            <input type="checkbox" onChange={handleThemeChange} /> Dark Theme
          </div>
          <h3>User Login</h3>
          <dl>
            <dt>User Name</dt>
            <dd>
              <input type="text" className="class-input" />
            </dd>
            <dt>Password</dt>
            <dd>
              <input type="password" className="class-input" />
            </dd>
          </dl>
          <button className={buttonTheme}>Login</button>
        </form>
      </div>
    </div>
  );
};
export { ClassBinding };
