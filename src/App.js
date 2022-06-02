import React from "react";
import Header from "./Header";
import Header2 from "./Header2";
import Sectioncha1 from "./Sectioncha1";
import Sectioncha2 from "./Sectioncha2";
import Sectioncha3 from "./Sectioncha3";
import Sectioncha4 from "./Sectioncha4";
import Sectioncha5 from "./Sectioncha5";
import Slider6 from "./Slider6";
import Sectioncha7 from "./Sectioncha7";
import skill from "./img/Logo.png";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="sk-navbar dark" style={{ position: "fixed" }}>
        <div className="sk-navbar__container">
          <div className="sk-navbar__main-logo sk-navbar__main-logo--desktop">
            <img src={skill} alt="" />
          </div>
          <div className="sk-navbar__main-logo sk-navbar__main-logo--mobile">
            <img src={skill} alt="" />
          </div>
          <div className="sk-navbar__content">
            <ul className="sk-navbar__content-list">
              <li className="sk-navbar__content-list__item">
                <a href="/">Home</a>
              </li>
              <li className="sk-navbar__content-list__item">
                <a href="/">Course</a>
              </li>
              <li className="sk-navbar__content-list__item">
                <a href="/">About</a>
              </li>
              <li className="sk-navbar__content-list__item">
                <a href="/">Instructor</a>
              </li>
              <li className="sk-navbar__content-list__item">
                <a href="/">Login</a>
              </li>
              <li className="sk-navbar__content-list__item">
                <button className="sk-nav-btn">Sign Up</button>
              </li>
            </ul>
          </div>
          <Header2 />
        </div>
      </nav>
      <Header />
      <Sectioncha1 />
      <Sectioncha2 />
      <Sectioncha3 />
      <Sectioncha4 />
      <Sectioncha5 />
      <Slider6 />
      <Sectioncha7 />
      <Footer />
    </div>
  );
}

export default App;
