import React from "react";
import logo6 from "./img/logo6.png";
import logo1 from "./img/logo1.png";
import logo2 from "./img/logo2.png";
import logo3 from "./img/logo3.png";
import logo4 from "./img/logo4.png";
import logo5 from "./img/logo5.png";

import "./Sectioncha2.css";

function Sectioncha2() {
  return (
    <div>
      <section className="sl-home-perfect-platform">
        <p className="sl-home-perfect-platform__title">
          Trusted by 500+ leading universities and companies
        </p>
        <div className="sl-home-perfect-platform__items-wrapper">
          <div className="sl-home-perfect-platform-item">
            <div className="sl-home-perfect-platform-item__name">
              <img src={logo6} alt="" />
            </div>
          </div>
          <div className="sl-home-perfect-platform-item">
            <div className="sl-home-perfect-platform-item__name">
              <img src={logo1} alt="" />
            </div>
          </div>
          <div className="sl-home-perfect-platform-item">
            <div className="sl-home-perfect-platform-item__name">
              <img src={logo2} alt="" />
            </div>
          </div>
          <div className="sl-home-perfect-platform-item">
            <div className="sl-home-perfect-platform-item__name">
              <img src={logo3} alt="" />
            </div>
          </div>
          <div className="sl-home-perfect-platform-item">
            <div className="sl-home-perfect-platform-item__name">
              <img src={logo4} alt="" />
            </div>
          </div>
          <div className="sl-home-perfect-platform-item">
            <div className="sl-home-perfect-platform-item__name">
              <img src={logo5} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Sectioncha2;
