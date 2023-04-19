import React from "react";
import "./AboutMe.css";
import AboutSvg from "../assets/About.svg";
import MeSvg from "../assets/me.svg";

function AboutMe() {
  return (
    <div className="about-container">
      <div className = "about-images">
        <div>
          <img className="about-svg" src={AboutSvg} alt="about" />
        </div>
        <div>
          <img className="about-svg" src={MeSvg} alt="me"></img>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
