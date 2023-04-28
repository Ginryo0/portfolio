import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo } from '../assets';

import MobNav from './mobnav/MobNav';
import CTABtn from './mobnav/CTABtn';
import useScrollPosition from '../hooks/useScrollPosition';
const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [oldPosition, setOldPosition] = useState(0);
  const [navClass, setNavClass] = useState('');
  const toggleNav = () => {
    setToggle((prev) => !prev);
  };

  const logoIcon = useRef();
  const scrollPosition = useScrollPosition();
  useEffect(() => {
    if (scrollPosition === 0) {
      setNavClass('');
    } else if (oldPosition > scrollPosition) {
      setNavClass('nav_shown');
    } else if (oldPosition < scrollPosition) {
      setNavClass('nav_hidden');
      setToggle(false);
    }
    setOldPosition(() => scrollPosition);
  });
  console.log(navClass);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 nav ${navClass}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            ref={logoIcon}
            alt="logo"
            className="logo w-9 h-9 object-contain"
            onMouseEnter={() => {
              if (!logoIcon.current.className.includes('animate')) {
                logoIcon.current.classList.add('animate');
                setTimeout(() => {
                  logoIcon.current.classList.remove('animate');
                }, 500);
              }
            }}
          />
        </Link>
        <div className="hidden sm:flex flex-row items-center justify-center gap-10">
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-tertiary' : 'text-secondary'
                } hover:text-tertiary text-[18px] font-medium cursor-pointer`}
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
                  active === link.title ? 'text-tertiary' : 'text-secondary'
                } hover:text-tertiary text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                  toggleNav();
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </MobNav>
        </div>
      </div>
    </nav>
    // mob nav
  );
};

export default Navbar;
