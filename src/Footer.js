import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { GrPinterest } from "react-icons/gr";

function Footer() {
  return (
    <div className="footer">
      <div className="kurs box">
        <h1>Services</h1>
        <p>Online Instructor</p>
        <p>Premium E Course</p>
        <p>E Books</p>
        <p>Our Blogs</p>
      </div>

      <div className="contact box">
        <h1>Information</h1>
        <p>Join Us</p>
        <p>Get Promo</p>
        <p>Premium Feature</p>
        <p>Schedule</p>
      </div>

      <div className="kurs box">
        <h1>Company</h1>
        <p>Partnership</p>
        <p>Terms of Use</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="connect box">
        <div className="adress">
          <h1>Get in Touch</h1>
        </div>
        <div className="text">
          <p>
            Follow us on social media and stay updated with the latest
            information about our services
          </p>
        </div>
        <div className="tarmoqlar">
          <BsFacebook />
          <AiFillTwitterCircle />
          <RiInstagramFill />
          <GrPinterest />
        </div>
        <p className="copy">© Skillcare 2021 all rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
