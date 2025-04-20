import { motion } from 'framer-motion';
import { styles } from '../styles';
import { AstroCanvas } from './canvas';
import CTABtn from './mobnav/CTABtn';
import Socials from './Socials';
import { GradualSpacing } from './gradual-spacing';
import { TextFade } from './TextFade';

const Hero = () => {
  return (
    <section
      className={`relative flex flex-col md:flex-row items-center justify-start min-h-screen overflow-hidden ${styles.paddingX} sm:pr-0 max-w-[clamp(350px,100vw,1500px)] sm:pt-8 pt-28 mx-auto`}
    >
      {/* <div className="absolute w-[clamp(500px,120vw,1200px)] aspect-square bg-gradient-radial-2 opacity-30 rounded-full blur-[5vw] animate-blob1"></div> */}
      {/* <div className="absolute w-[min(80vw,500px)] aspect-square radial-gradient opacity-30 rounded-full blur-3xl animate-blob2"></div> */}
      <div className="flex flex-col">
        <div
          className={` inset-0 md:max-w-1/2 max-w-full flex flex-row items-start justify-center z-5`}
        >
          <div className={``}>
            <TextFade
              direction="up"
              className="flex flex-col justify-center w-full gap-6 pt-0 pb-5"
            >
              <h2 className={`${styles.heroSubText} lg:-mb-4`}>
                Hi, I'm{' '}
                <span className="inline-block animated-text">Ahmed Zeid</span>
              </h2>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Web Developer
              </h1>
              <h2 className={`${styles.heroSubHead}`}>
                I build fast, beautiful, and user-focused websites that help
                brands shine online.
                <br /> Let’s bring your vision to life — one pixel at a time.
              </h2>
              <div className="mt-4 xs:text-[16px] flex flex-col items-start sm:gap-8 gap-4 justify-start max-w-fit">
                <CTABtn className="md:px-9 md:py-3 md:text-[1.25rem]" />
                <Socials className="justify-between w-full sm:max-w-full max-w-[120px] self-center icons_large" />
              </div>
            </TextFade>
            {/* <GradualSpacing
              text="Hi, I'm Ahmed Zeid"
              className={`${styles.heroSubText} lg:-mb-4`}
            /> */}
            {/* <h5 className={`${styles.heroSubText} lg:-mb-4`}></h5> */}
            {/* <GradualSpacing
              text="Web Developer"
              className={`${styles.heroHeadText} animated-text justify-start`}
            /> */}
            {/* <h1 className={`${styles.heroHeadText} text-white`}>Ahmed Zeid</h1> */}
          </div>
        </div>
      </div>

      <AstroCanvas />

      <div className="absolute flex items-center justify-center w-full md:hidden xs:bottom-10 bottom-32 ">
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
              className="w-2 h-2 mb-1 rounded-full bg-white-200"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
