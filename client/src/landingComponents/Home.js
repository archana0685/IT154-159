import React from "react";
import BannerBackground from "../landingAssets/home-banner-background.png";
import BannerImage from  "../landingAssets/homepageimage-photoaidcom-cropped.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import About from "../landingComponents/About";
import Work from "../landingComponents/Work";
import Testimonial from "../landingComponents/Testimonial";
import Contact from "../landingComponents/Contact";
import Footer from "../landingComponents/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Hassle-free Cooking at Just One Click!
          </h1><br/>
          <p className="primary-text">
            Nothing beats the authetic flavor of home cooked food..!<br/>
            Get recipies from across the globe at your home.
          </p>
          <button className="secondary-button">
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;