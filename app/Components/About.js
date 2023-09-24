import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Carousel_text from "./Carousel";
import Styles from "@/app/Styles/about.module.css";

const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === Carousel_text.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? Carousel_text.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id={Styles.About_page}>
      <h1 className={Styles.no_select}>About Us</h1>
      <h3 className={Styles.no_select}>WORLD'S NO ONE PREMIUM CLOTHES</h3>
      <div id={Styles.Carousel}>
        <SlArrowLeft
          className={Styles.SlArrowLeft}
          onClick={() => handlePrevious()}
        />
        <div id={Styles.Carousel_text}>
          <p className={Styles.no_select}>{Carousel_text[currentIndex]}</p>
          <div className={Styles.indicator}>
            {Carousel_text.map((_, index) => (
              <div
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
        <SlArrowRight
          className={Styles.SlArrowRight}
          onClick={() => handleNext()}
        />
      </div>
    </div>
  );
};

export default AboutPage;
