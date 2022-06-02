import React from "react";
import "./Sectioncha3.css";
import designicon from "./img/designicon.png";
import webicon from "./img/webicon.png";
import grapicon from "./img/grapicon.png";
import dsicon from "./img/dsicon.png";
import dgicon from "./img/dgicon.png";

function Sectioncha3() {
  return (
    <div>
      <section className="sl-home-propage">
        <div className="sl-home-propage__wrapper">
          <div className="sl-home-propage__wrapper__heading">
            <h1>Browse online Course Categories</h1>
          </div>
          <div className="sl-home-propage__wrapper__benefits">
            <div className="sl-home-propage__wrapper__benefits__row">
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={designicon} alt="" />
                </div>
                <p className="sl-home-propage__wrapper__benefits__row-item-name">
                  UI/UX Design
                </p>
              </div>
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={webicon} alt="" />
                </div>
                <p className="sl-home-propage__wrapper__benefits__row-item-name">
                Web Development
                </p>
              </div>
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={grapicon} alt="" />
                </div>
                <p className="sl-home-propage__wrapper__benefits__row-item-name">
                  Graphic Design
                </p>
              </div>
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={dsicon} alt="" />
                </div>
                <p className="sl-home-propage__wrapper__benefits__row-item-name">
                  Data Science
                </p>
              </div>
              <div className="sl-home-propage__wrapper__benefits__row-item">
                <div className="sl-home-propage__wrapper__benefits__row-item__icon">
                  <img src={dgicon} alt="" />
                </div>
                <p className="sl-home-propage__wrapper__benefits__row-item-name">
                  Digital Marketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sectioncha3;
