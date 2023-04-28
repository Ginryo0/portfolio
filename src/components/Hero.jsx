import { motion } from 'framer-motion';
import { styles } from '../styles';
import { AstroCanvas } from './canvas';
import CTABtn from './mobnav/CTABtn';
import Socials from './Socials';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start lg:mt-20 mt-10 justify-start z-5`}
      >
        <div className="mt-10 ml-10 lg:text-[31.25px]  sm:text-[25px] xs:text-[16px] min-[900px]:top-[14rem] min-[724px]:top-[16rem] sm:top-[18rem] sm:left-[2rem] xs:top-[12rem] top-[12.4rem] left-[0rem] z-20 absolute flex items-center sm:gap-12 gap-20">
          <CTABtn className="px-8 py-2 cta-big " />
          <Socials className="icons_large" />
        </div>
        <div className="w-1 sm:h-40 h-28 blue-gradient mt-2 mr-5"></div>
        <div className={`w-50`}>
          <h5 className={`${styles.heroSubText} -mb-[4px]`}>Hi, I'm</h5>
          <h1 className={`${styles.heroHeadText}`}>Ahmed Zeid</h1>
          <h2 className={`${styles.heroSubHead} `}>
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

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white-200 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-2 h-2 rounded-full bg-white-200 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
