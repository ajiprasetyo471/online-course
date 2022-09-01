import React from 'react';
import './cards.css';
import {
  RiArrowRightSLine,
  RiArrowLeftSLine,
  RiStarFill,
} from 'react-icons/ri';
import cardImg from '../../assets/card-image.png';

const Cards = (props) => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  const slideLeft = () => {
    var cards = document.getElementById('cards');
    cards.scrollLeft = cards.scrollLeft - 500;
  };

  const slideRight = () => {
    var cards = document.getElementById('cards');
    cards.scrollLeft = cards.scrollLeft + 500;
  };

  return (
    <div className="cards_container section__margin">
      <div className="cards-icon left" onClick={slideLeft}>
        <RiArrowLeftSLine size={20} />
      </div>
      <div id="cards">
        {cards.map((card, index) => {
          return (
            <div className="card-slider">
              <div className="card-slider_image">
                <img src={cardImg} alt="" />
              </div>
              <div className="card-slider_content">
                <p className="card-slider_title-1">Arkademi</p>
                <p className="card-slider_title-2">
                  Membuat Landing Page bagi Desainer Website
                </p>
                <p className="card-slider_rating">
                  <span className="card-slider_rating-1">
                    <RiStarFill color="#F7DE06" />
                    4.5
                  </span>
                  <span className="card-slider_rating-2">(&gt;1000)</span>
                </p>
                <p>
                  <span className="card-slider_discount-1">30%</span>
                  <span className="card-slider_discount-2">
                    Rp <s>329.000</s>
                  </span>
                </p>
                <p className="card-slider_price">Rp 280.000</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cards-icon right" onClick={slideRight}>
        <RiArrowRightSLine size={20} />
      </div>
    </div>
  );
};

export default Cards;
