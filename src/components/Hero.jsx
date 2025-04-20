import { motion } from 'framer-motion';
import { styles } from '../styles';
import { AstroCanvas } from './canvas';
import CTABtn from './mobnav/CTABtn';
import Socials from './Socials';

const Hero = () => {
  return (
    <section
      className={`relative flex flex-col md:flex-row items-center justify-center min-h-screen overflow-hidden ${styles.paddingX} sm:pr-0 max-w-[clamp(350px,100vw,1500px)] sm:pt-8 pt-20 mx-auto`}
    >
      {/* <div className="absolute w-[clamp(500px,120vw,1200px)] aspect-square bg-gradient-radial-2 opacity-30 rounded-full blur-[5vw] animate-blob1"></div> */}
      {/* <div className="absolute w-[min(80vw,500px)] aspect-square radial-gradient opacity-30 rounded-full blur-3xl animate-blob2"></div> */}
      <div className="flex flex-col">
        <div
          className={` inset-0 md:max-w-1/2 max-w-full flex flex-row items-start justify-center z-5`}
        >
          {/* Hero Content */}

          <div className={`w-50 flex flex-col gap-2`}>
            <h5 className={`${styles.heroSubText} lg:-mb-4`}>Hi, I'm</h5>
            <h1 className={`${styles.heroHeadText} text-white`}>Ahmed Zeid</h1>
            <h2 className={`${styles.heroSubHead}`}>
              A <span className="animated-text"> Web Developer</span> Crafting
              Seamless Digital Experiences.
            </h2>
          </div>
        </div>
        <div className="mt-4 xs:text-[16px] flex flex-col items-start sm:gap-8 gap-4 justify-start max-w-fit">
          <CTABtn className="px-9 py-3 text-[1.5rem]" />
          <Socials className="justify-between w-full sm:max-w-full max-w-[120px] self-center icons_large" />
        </div>
      </div>

      <AstroCanvas />

      <div className="absolute flex items-center justify-center w-full xs:bottom-10 bottom-32">
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
