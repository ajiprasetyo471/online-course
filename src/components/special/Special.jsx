import React from 'react';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import './special.css';

const Special = (props) => {
  const slideLeft = () => {
    let special = document.getElementById('special');
    special.scrollLeft = special.scrollLeft - 500;
  };

  const slideRight = () => {
    let special = document.getElementById('special');
    special.scrollLeft = special.scrollLeft + 500;
  };

  return (
    <div className="special_container section__margin">
      <div className="special-icon left" onClick={slideLeft}>
        <RiArrowLeftSLine size={20} />
      </div>
      <div id="special">
        {props.specialItem.map((special, index) => {
          return (
            <div className="special-slider" key={index}>
              <div
                className="special-slider_image"
                style={{
                  backgroundImage: `url(${special.image})`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="special-icon right" onClick={slideRight}>
        <RiArrowRightSLine size={20} />
      </div>
      <button className="section_button special_button">
        Lihat Semua Spesialisasi
      </button>
    </div>
  );
};

export default Special;
