import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo } from '../assets';

import MenuBtn from './mobnav/MenuBtn';
import MobNav from './mobnav/MobNav';
import CTABtn from './mobnav/CTABtn';
const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const toggleNav = () => {
    setToggle((prev) => !prev);
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-transparent`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
            toggleNav();
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
        </Link>
        <div className="hidden sm:flex flex-row items-center justify-center gap-10">
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-blue-500' : 'text-secondary'
                } hover:text-blue-500 text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <CTABtn className="py-1 px-2" />
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <MobNav toggle={toggle} onClick={toggleNav}>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-blue-500' : 'text-secondary'
                } hover:text-blue-500 text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                  toggleNav();
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </MobNav>
          {/* <button className="cursor-pointer text-blue-500 text-[20px]">
            <ion-icon name="menu-outline "></ion-icon>
          </button> */}
        </div>
      </div>
    </nav>
    // mob nav
  );
};

export default Navbar;
