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
        <CTABtn className="mt-10 ml-10 lg:text-[31.25px] lg:top-[17.5rem] sm:left-[2rem] sm:text-[25px] sm:top-[17rem] min-[850px]:top-[14rem] min-[1250px]:top-[16rem] xs:text-[16px] xs:top-[12rem] xs:left-[0rem] z-20 absolute   px-8 py-2 cta-big " />
        <div className="w-1 h-40 blue-gradient mt-2 mr-5"></div>
        <div className={`w-50`}>
          <h5 className={`${styles.heroSubText} text-secondary`}>Hi, I'm</h5>
          <h1 className={`${styles.heroHeadText}   mb-5`}>Ahmed Zeid</h1>
          <h2 className={`${styles.heroSubHead} text-white-100 mb-4`}>
            I Launch Your <span className="text-tertiary">Web </span>Dreams to
            the <span className="text-tertiary">Stars</span>.
          </h2>

          <ul className={`  ${styles.heroSubText} pr-62 list-disc`}>
            <li className="text-white-200">
              I am an enthusiastic web developer with a passion for creating
              engaging websites.
            </li>
            <li className="text-white-200 z-100">
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
