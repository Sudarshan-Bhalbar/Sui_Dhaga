import React, { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Carousel_text from './Carousel';

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
    console.log(Carousel_text);

  };

  return (
    <div id='About-page'>
      <h1>About Us</h1>
      <h3>WORLD'S NO ONE PREMIUM CLOTHES</h3>
      <div id='Carousel'>
        <SlArrowLeft className='SlArrowLeft' onClick={() => handlePrevious()} />
        <div id='Carousel-text'>
          <p>{Carousel_text[currentIndex]}</p>
          <div className='indicator'>
            {Carousel_text.map((_, index) => (
              
              <div
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
        <SlArrowRight className='SlArrowRight' onClick={() => handleNext()} />
      </div>
    </div>
  );
};

export default AboutPage;
