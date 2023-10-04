import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Carousel_text from "./Carousel";
import Styles from "@/app/Styles/about.module.css";
import { easeInOut, motion } from "framer-motion";

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
      <motion.h1
        className={Styles.no_select}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        About Us
      </motion.h1>
      <motion.h3
        className={Styles.no_select}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        WORLD'S NO ONE PREMIUM CLOTHES
      </motion.h3>
      <div id={Styles.Carousel}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: easeInOut }}
        >
          <SlArrowLeft
            className={Styles.SlArrowLeft}
            onClick={() => handlePrevious()}
          />
        </motion.div>
        <div id={Styles.Carousel_text}>
          <motion.p
            className={Styles.no_select}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: easeInOut }}
          >
            {Carousel_text[currentIndex]}
          </motion.p>
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
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: easeInOut }}
        >
          <SlArrowRight
            className={Styles.SlArrowRight}
            onClick={() => handleNext()}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
