import React from 'react';
import './promo.css';

const Promo = () => {
  return (
    <div className="promo section__margin">
      <div className="section_header">
        <h1>Promo Spesial Untukmu</h1>
      </div>
      <div className="promo_container">
        <div className="promo_content promo-1"></div>
        <div className="promo_content promo-2"></div>
        <div className="promo_content promo-3"></div>
        <div className="promo_content promo-1"></div>
        <div className="promo_content promo-2"></div>
        <div className="promo_content promo-3"></div>
      </div>
    </div>
  );
};

export default Promo;
