import React, { useState } from 'react';
import './hero.css';
import dataHero from './dataHero';
import BtnHero from './BtnHero';

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataHero.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataHero.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataHero.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div>
      <div className="hero_container section__margin">
        {dataHero.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? 'slide active-anim' : 'slide'
              }
            >
              {/* <img src={hero} alt="" /> */}
            </div>
          );
        })}
        <BtnHero moveSlide={nextSlide} direction={'next'} />
        <BtnHero moveSlide={prevSlide} direction={'prev'} />

        <div className="container-dots">
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? 'dot active' : 'dot'}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
