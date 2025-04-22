import { motion } from 'framer-motion';
import { styles } from '../styles';
import { AstroCanvas } from './canvas';
import CTABtn from './mobnav/CTABtn';
import Socials from './Socials';
import { TextFade } from './TextFade';
import { useState } from 'react';
import FlipHeroText from './FlipHeroText';

const Hero = () => {
  const [onHappy, setOnHappy] = useState(() => {});
  const [onSad, setOnSad] = useState(() => {});

  return (
    <section
      className={`relative flex flex-col md:flex-row items-center justify-start min-h-screen overflow-hidden ${styles.paddingX} md:pr-0 max-w-[clamp(350px,100vw,1500px)] md:pt-8 xs:pt-36 pt-28 mx-auto`}
    >
      <div className="flex flex-col">
        <div
          className={`md:max-w-1/2 max-w-full flex flex-row items-start justify-center z-5`}
        >
          <div className={``}>
            <TextFade
              direction="up"
              className="flex flex-col justify-center w-full gap-6 pt-0 pb-5"
              staggerChildren={0.3}
            >
              <h2 className={`${styles.heroSubText}`}>
                Hi, I'm{' '}
                <span className="inline-block animated-text">Ahmed Zeid</span>
              </h2>
              <FlipHeroText>Web Developer</FlipHeroText>
              <h2 className={`${styles.heroSubHead} text-white-200`}>
                I build fast, beautiful, and user-focused websites that help
                brands shine online.
                <br /> Let’s bring your vision to life — one pixel at a time.
              </h2>
              <div className="mt-4 xs:text-[16px] flex flex-col items-start sm:gap-8 gap-4 justify-start max-w-fit">
                <CTABtn
                  className="md:px-9 md:py-3 md:text-[1.25rem]"
                  onMouseEnter={onHappy}
                  onMouseLeave={onSad}
                  onTouchStart={onHappy}
                  onTouchEnd={onSad}
                />
                <Socials className="justify-between w-full sm:max-w-full max-w-[120px] self-center icons_large" />
              </div>
            </TextFade>
          </div>
        </div>
      </div>

      <AstroCanvas setOnHappy={setOnHappy} setOnSad={setOnSad} />

      <div className="absolute flex items-center justify-center w-full md:hidden xs:bottom-10 bottom-20 ">
        <a href="#about">
          <div className="flex items-start justify-center w-6 h-12 p-2 border-2 rounded-2xl border-white-200">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-2 h-2 mb-1 rounded-full bg-white-200"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
