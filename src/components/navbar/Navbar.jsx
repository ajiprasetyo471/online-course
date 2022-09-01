import React from 'react';
import { RiSearchLine, RiHeart3Line } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar section__padding">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links__input">
          <input
            className="navbar-links__input_search"
            type="text"
            placeholder="Cari kelas"
          />
          <RiSearchLine className="navbar-links__input_icon" />
        </div>
        <div className="navbar-links__button">
          <RiHeart3Line className="navbar-links__like" />
          <button className="navbar-links__button1">Masuk</button>
          <button className="navbar-links__button2">Daftar</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
