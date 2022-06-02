import React from "react";
import "./Header.css";
import skheader from "./img/skheader.png";
import { FaPlay } from "react-icons/fa";
function Header() {
  return (
    <div>
      <section className="sk-home-header">
        <div className="sc-header-container">
          <h1 className="sc-home-title">
            Start your learning our
            <span className="sc-home-sp">Experts trainers</span>
          </h1>
          <p className="sc-home-text">
            Build your skill from world-className universities and companies,{" "}
            <br /> you can learn online and earn certifications and degrees.
          </p>
          <div className="sc-home-btn">
            <button className="sc-home-btn1">Join for Free</button>
            <div className="sc-home-play">
              <FaPlay />
            </div>
            <p className="sc-home-text2">Play Now</p>
          </div>
          <div className="sk-home-right">
            <img src={skheader} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
