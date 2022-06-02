import React from "react";
import "./Sectioncha1.css";
import courses from "./img/courses.png";
import expert from "./img/expert.png";
import access from "./img/access.png";

function Sectioncha1() {
  return (
    <div>
      <section className="sl-home-courses">
        <div className="sl-home-courses__container">
          <div className="sl-horizontal">
            <div className="sl-horizontal__item">
              <div className="sl-home-course-item">
                <div className="sl-home-course-item__image-wrapper">
                  <img src={courses} alt="" />
                </div>
                <p className="sl-home-course-item__name">
                  +10000 Online Courses
                </p>
              </div>
            </div>
            <div className="sl-horizontal__item">
              <div className="sl-home-course-item">
                <div className="sl-home-course-item__image-wrapper">
                  <img src={expert} alt="" />
                </div>
                <p className="sl-home-course-item__name">Expert Instructions</p>
              </div>
            </div>
            <div className="sl-horizontal__item">
              <div className="sl-home-course-item">
                <div className="sl-home-course-item__image-wrapper">
                  <img src={access} alt="" />
                </div>
                <p className="sl-home-course-item__name">Lifetime Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sectioncha1;
