import React from 'react';
import './App.css';
import cardImg from './assets/card-image.png';
import logoTrending from './assets/logo-trending.png';
import special1 from './assets/special-1.png';
import special2 from './assets/special-2.png';
import special3 from './assets/special-3.png';
import logoFlashSale from './assets/logo-flash-sale.png';
import { RiTimeLine } from 'react-icons/ri';

import { Navbar, Menu, About, Footer, Special } from './components';
import {
  Categories,
  Cards,
  Institute,
  Promo,
  Hero,
  Testimonies,
} from './containers';

const App = () => {
  const cardClick = (card) => {
    // alert('hello');
  };

  const specialItem = [
    {
      image: special1,
    },
    {
      image: special2,
    },
    {
      image: special3,
    },
    {
      image: special1,
    },
    {
      image: special2,
    },
    {
      image: special3,
    },
  ];

  const cardItem = [
    {
      image: cardImg,
      clickEvent: cardClick,
    },
    {
      image: cardImg,
      clickEvent: cardClick,
    },
    {
      image: cardImg,
      clickEvent: cardClick,
    },
    {
      image: cardImg,
      clickEvent: cardClick,
    },
    {
      image: cardImg,
      clickEvent: cardClick,
    },
    {
      image: cardImg,
      clickEvent: cardClick,
    },
    {
      image: cardImg,
      clickEvent: cardClick,
    },
    {
      image: cardImg,
      clickEvent: cardClick,
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Hero />
      <Special specialItem={specialItem} />
      <div className="card" id="trending">
        <div className="section_header section__margin">
          <img src={logoTrending} alt="" />
          <h1>Trending</h1>
        </div>
        <Cards cardItem={cardItem} />
      </div>
      <div className="card" id="flashSale">
        <div className="section_header section__margin">
          <img src={logoFlashSale} alt="" />
          <h1>Flash Sale</h1>
          <span className="flash-end">Berakhir dalam</span>
          <span className="flash-time">
            <RiTimeLine /> 08 : 52 : 05
          </span>
        </div>
        <Cards cardItem={cardItem} />
      </div>
      <Categories />
      <Promo />
      <Institute />
      <div className="card" id="terbaru">
        <div className="section_header section__margin">
          <h1>Terbaru</h1>
        </div>
        <Cards cardItem={cardItem} />
      </div>
      <div className="card" id="bisnis">
        <div className="section_header section__margin">
          <h1>Bisnis</h1>
        </div>
        <Cards cardItem={cardItem} />
      </div>
      <div className="card" id="pengembanganKarir">
        <div className="section_header section__margin">
          <h1>Pengembangan Karier</h1>
        </div>
        <Cards cardItem={cardItem} />
      </div>
      <Testimonies />
      <About />
      <Footer />
    </div>
  );
};

export default App;
