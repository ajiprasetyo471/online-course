import React from 'react';
import './App.css';

import { Navbar, Menu, About, Footer } from './components';
import {
  Categories,
  Cards,
  Institute,
  Promo,
  Hero,
  Specials,
  Testimonies,
} from './containers';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Hero />
      <Specials />
      <Cards />
      <Cards />
      <Categories />
      <Promo />
      <Institute />
      <Cards />
      <Cards />
      <Cards />
      <Testimonies />
      <About />
      <Footer />
    </div>
  );
};

export default App;
