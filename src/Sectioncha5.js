import React from "react";
import "./Sectioncha5.css";
import sec5img from "./img/sec5img.png";

function Sectioncha5() {
  return (
    <div>
      <div className="section-5">
        <div className="sc-container">
          <div className="sc5-title">
            Benefits Of Learning <br /> From <span>SkillCare</span>
          </div>
          <div className="sc5-text">
            Watch on-demand video lectures from <br /> renowned instructors in subjects
            such as <br /> Proggraming, business, computer science, <br /> data science, and
            language learning.
          </div>
        </div>
        <div className="sc5-btn1">
          <div className="sc5-btn2">Start learning</div>
          <a href="/" className="sc5-link">
            Read more
          </a>
        </div>
        <div className="sc5-right">
            <img src={sec5img}  alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sectioncha5;
