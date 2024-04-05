import React from "react";
import PickMeals from "../landingAssets/pick-meals-image.png";
import ChooseMeals from "../landingAssets/choose-image.png";
import DeliveryMeals from "../landingAssets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Cook",
      text: "Browse through a collection of diverse recipes from around the world.",
    },
    {
      image: ChooseMeals,
      title: "Create",
      text: "Share your amazing recipes with people around the globe. ",
    },
    {
      image: DeliveryMeals,
      title: "Community",
      text: "Rate and share recipes globally",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        At Rustic Recipes, we're passionate about bringing people together through the joy of cooking and sharing delicious recipes. Whether you're a seasoned chef or a kitchen novice, our platform is designed to inspire creativity and culinary exploration.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;