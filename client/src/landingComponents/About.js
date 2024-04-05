import React from "react";
import AboutBackground from "../landingAssets/about-background.png";
import AboutBackgroundImage from "../landingAssets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        Different foods offer different nutrients. By consuming a variety of foods, you're more likely to meet your body's nutritional needs. Each food item provides a unique combination of vitamins, minerals, antioxidants, and other essential nutrients necessary for overall health and well-being.
        </p>
        
        
      </div>
    </div>
  );
};

export default About;