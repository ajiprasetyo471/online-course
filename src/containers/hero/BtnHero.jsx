import React from 'react';
import './hero.css';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const BtnHero = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      {direction === 'next' ? (
        <RiArrowRightSLine size={20} />
      ) : (
        <RiArrowLeftSLine size={20} />
      )}
    </button>
  );
};

export default BtnHero;
