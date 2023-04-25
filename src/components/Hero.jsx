import React, { useState } from 'react';
import { styles } from '../styles';
import { AstroCanvas } from './canvas';
import CTABtn from './mobnav/CTABtn';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start mt-5 justify-start z-5`}
      >
        <CTABtn className="mt-10 ml-10 lg:text-[31.25px] min-[1169px]:top-[14rem] lg:top-[15rem] sm:left-[2rem] sm:text-[25px] sm:top-[17rem] min-[850px]:top-[14rem]  xs:text-[16px] xs:top-[12rem] xs:left-[0rem] z-20 absolute   px-8 py-2 cta-big " />
        <div className="w-1 sm:h-40 h-28 blue-gradient mt-2 mr-5"></div>
        <div className={`w-50`}>
          <h5 className={`${styles.heroSubText} text-secondary`}>Hi, I'm</h5>
          <h1 className={`${styles.heroHeadText}   mb-5`}>Ahmed Zeid</h1>
          <h2 className={`${styles.heroSubHead} text-white-100 mb-4`}>
            I Launch Your <span className="text-tertiary">Web </span>Dreams to
            the <span className="text-tertiary">Stars</span>.
          </h2>

          <ul className={`${styles.heroSubText} pr-62 hero-list`}>
            <li className="text-white-200 font-para relative">
              I am an enthusiastic web developer with a passion for creating
              engaging websites.
            </li>
            <li className="text-white-200 font-para relative">
              My goal is to bring the optimal solutions to users and enhance
              their overall browsing experience.
            </li>
          </ul>
        </div>
      </div>
      <AstroCanvas />
    </section>
  );
};

export default Hero;
