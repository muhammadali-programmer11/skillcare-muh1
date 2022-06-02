import React from "react";
import "./Sectioncha4.css";
import sec4cards from "./img/sec4cards.png";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import rate from "./img/rate.png";

function Sectioncha4() {
  return (
    <div>
      <div className="section-4">
        <div className="sec4-container">
          <div className="sec4-course">Explore most popular courses</div>
          <div className="items">
            <a href="/" className="items1">
              Programing
            </a>
            <a href="/" className="items1">
              Design
            </a>
            <a href="/" className="items1">
              Business
            </a>
            <a href="/" className="items1">
              Lifestyle
            </a>
            <a href="/" className="items1">
              Health &amp; Fitness
            </a>
            <a href="/" className="items1">
              Marketing
            </a>
            <a href="/" className="items1">
              Music
            </a>
            <a href="/" className="items1">
              Finance &amp; Accounting
            </a>
          </div>
          <div className="carousel">
            <div className="cards">
              <div className="card">
                <img src={sec4cards} alt="" />
                <div className="card-title">
                  <p>
                    <BsPersonCircle />
                    Alex Maxwell
                  </p>
                  <span>Web Design</span>
                </div>
                <div className="card-text">
                  <p>
                    Web Design and Development <br /> Crash course 2022
                  </p>
                </div>
                <div className="card-stats">
                  <span>
                    <AiOutlineClockCircle /> 16hr 30mins
                  </span>
                  <span>Best Seller</span>
                </div>
                <div className="card-count">
                  <span>
                    $120 <del>$180</del>
                  </span>
                  <img src={rate} alt="" />
                </div>
              </div>
              <div className="card">
                <img src={sec4cards} alt="" />
                <div className="card-title">
                  <p>
                    <BsPersonCircle />
                    Alex MaxDoru
                  </p>
                  <span>Web Design</span>
                </div>
                <div className="card-text">
                  <p>
                    Web Design and Development <br /> Crash course 2022
                  </p>
                </div>
                <div className="card-stats">
                  <span>
                    <AiOutlineClockCircle /> 16hr 30mins
                  </span>
                  <span>Best Seller</span>
                </div>
                <div className="card-count">
                  <span>
                    $120 <del>$180</del>
                  </span>
                  <img src={rate} alt="" />
                </div>
              </div>
              <div className="card">
                {" "}
                <img src={sec4cards} alt="" />
                <div className="card-title">
                  <p>
                    <BsPersonCircle />
                    Jose Portilla
                  </p>
                  <span>Web Design</span>
                </div>
                <div className="card-text">
                  <p>
                    Web Design and Development <br /> Crash course 2022
                  </p>
                </div>
                <div className="card-stats">
                  <span>
                    <AiOutlineClockCircle /> 16hr 30mins
                  </span>
                  <span>Best Seller</span>
                </div>
                <div className="card-count">
                  <span>
                    $120 <del>$180</del>
                  </span>
                  <img src={rate} alt="" />
                </div>
              </div>
              <div className="card">
                {" "}
                <img src={sec4cards} alt="" />
                <div className="card-title">
                  <p>
                    <BsPersonCircle />
                    Alex Smith
                  </p>
                  <span>Web Design</span>
                </div>
                <div className="card-text">
                  <p>
                    Web Design and Development <br /> Crash course 2022
                  </p>
                </div>
                <div className="card-stats">
                  <span>
                    <AiOutlineClockCircle /> 16hr 30mins
                  </span>
                  <span>Best Seller</span>
                </div>
                <div className="card-count">
                  <span>
                    $120 <del>$180</del>
                  </span>
                  <img src={rate} alt="" />
                </div>
              </div>
              <div className="card">
                {" "}
                <img src={sec4cards} alt="" />
                <div className="card-title">
                  <p>
                    <BsPersonCircle />
                    Barin Daniel
                  </p>
                  <span>Web Design</span>
                </div>
                <div className="card-text">
                  <p>
                    Web Design and Development <br /> Crash course 2022
                  </p>
                </div>
                <div className="card-stats">
                  <span>
                    <AiOutlineClockCircle /> 16hr 30mins
                  </span>
                  <span>Best Seller</span>
                </div>
                <div className="card-count">
                  <span>
                    $120 <del>$180</del>
                  </span>
                  <img src={rate} alt="" />
                </div>
              </div>
              <div className="card">
                {" "}
                <img src={sec4cards} alt="" />
                <div className="card-title">
                  <p>
                    <BsPersonCircle />
                    Alex Smith
                  </p>
                  <span>Web Design</span>
                </div>
                <div className="card-text">
                  <p>
                    Web Design and Development <br /> Crash course 2022
                  </p>
                </div>
                <div className="card-stats">
                  <span>
                    <AiOutlineClockCircle /> 16hr 30mins
                  </span>
                  <span>Best Seller</span>
                </div>
                <div className="card-count">
                  <span>
                    $120 <del>$180</del>
                  </span>
                  <img src={rate} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="sec4-btn">View all course</div>
        </div>
      </div>
    </div>
  );
}

export default Sectioncha4;
