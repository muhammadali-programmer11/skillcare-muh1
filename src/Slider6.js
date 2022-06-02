import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider6.css";
import rate from "./img/rate.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <div>
        <h2 className="sc6-text">
          What Our Student Say <br />
          <span style={{ color: "rgb(254, 114, 68)" }}>About Us</span>
        </h2>
        <Slider {...settings}>
          <div className="sc6-cards">
            <div className="sc6-title">
              <p>“Honestly awesome UI UX design course”</p>
            </div>
            <div className="sc6-text1">
              Amazing content from google, they not only cover <br /> figma also
              they concentrated on UX and other design <br /> aspects, Very
            </div>
            <div className="sc6-profile">
              <p>Alisha Rahman</p>
              <span> Google UI UX Design</span>
              <img src={rate} alt="" />
            </div>
          </div>
          <div className="sc6-cards">
            <div className="sc6-title">
              <p>“Honestly awesome UI UX design course”</p>
            </div>
            <div className="sc6-text1">
              Amazing content from google, they not only cover <br /> figma also
              they concentrated on UX and other design <br /> aspects, Very
          
            </div>
            <div className="sc6-profile">
              <p>Alisha Rahman</p>
              <span> Google UI UX Design</span>
              <img src={rate} alt="" />
            </div>
          </div>
          <div className="sc6-cards">
            <div className="sc6-title">
              <p>“Honestly awesome UI UX design course”</p>
            </div>
            <div className="sc6-text1">
              Amazing content from google, they not only cover <br /> figma also
              they concentrated on UX and other design <br /> aspects, Very

            </div>
            <div className="sc6-profile">
              <p>Alisha Rahman</p>
              <span> Google UI UX Design</span>
              <img src={rate} alt="" />
            </div>
          </div>
          <div className="sc6-cards">
            <div className="sc6-title">
              <p>“Honestly awesome UI UX design course”</p>
            </div>
            <div className="sc6-text1">
              Amazing content from google, they not only cover <br /> figma also
              they concentrated on UX and other design <br /> aspects, Very
            
            </div>
            <div className="sc6-profile">
              <p>Alisha Rahman</p>
              <span> Google UI UX Design</span>
              <img src={rate} alt="" />
            </div>
          </div>
          <div className="sc6-cards">
            <div className="sc6-title">
              <p>“Honestly awesome UI UX design course”</p>
            </div>
            <div className="sc6-text1">
              Amazing content from google, they not only cover <br /> figma also
              they concentrated on UX and other design <br /> aspects, Very
          
            </div>
            <div className="sc6-profile">
              <p>Alisha Rahman</p>
              <span> Google UI UX Design</span>
              <img src={rate} alt="" />
            </div>
          </div>
          <div className="sc6-cards">
            <div className="sc6-title">
              <p>“Honestly awesome UI UX design course”</p>
            </div>
            <div className="sc6-text1">
              Amazing content from google, they not only cover <br /> figma also
              they concentrated on UX and other design <br /> aspects, Very
          .
            </div>
            <div className="sc6-profile">
              <p>Alisha Rahman</p>
              <span> Google UI UX Design</span>
              <img src={rate} alt="" />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
