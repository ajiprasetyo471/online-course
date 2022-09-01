import React, { useState } from 'react';
import { RiArrowDownSFill, RiCloseLine, RiMenuLine } from 'react-icons/ri';
import './menu.css';

const MenuList = () => (
  <>
    <p>
      <a href="#bisnis">Bisnis</a>
    </p>
    <p>
      <a href="#keuangan">Keuangan</a>
    </p>
    <p>
      <a href="#karir">Pengembangan Karir</a>
    </p>
    <p>
      <a href="#sertifikasi">Sertifikasi</a>
    </p>
    <p>
      <a href="#teknologi">Teknologi</a>
    </p>
    <p>
      <a href="#bahasa">Bahasa</a>
    </p>
    <p>
      <a href="#korporat">Korporat</a>
    </p>
    <p>
      <a href="#hobi">Hobi</a>
    </p>
  </>
);

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="section__padding">
      <div className="menu-links">
        <div className="menu-links__dropdown">
          <button>
            Kategori
            <RiArrowDownSFill className="menu-links__dropdown_icon" />
          </button>
        </div>
        <div className="menu-links_container">
          <MenuList />
        </div>
        <div className="menu-hamburger">
          {toggleMenu ? (
            <RiCloseLine
              color="#C0C2C6"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenuLine
              color="#C0C2C6"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="menu-hamburger__container scale-up-center">
              <div className="menu-hamburger__container-links">
                <MenuList />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
