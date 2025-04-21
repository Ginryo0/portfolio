import { motion } from 'framer-motion';

import { slideIn, textVariant } from '../utils/motion';
import SectionWrapper from './hoc/SectionWrapper';
import { styles } from '../styles';
import { astro, logo } from '../assets';
import { tech } from '../constants';
import { AstroCanvas } from './canvas';

const Tech = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Tools</p>
        <h2 className={styles.sectionHeadText}>Tech</h2>
      </motion.div> */}
      <motion.div variants={slideIn('right', 'spring', 0.2, 2)}>
        {/* <div className="mb-5 tech-head">
          <div className="roll-bar">
            {tech.map((item) => {
              return (
                <p
                  key={item.name}
                  className={`${styles.sectionSubText} font-para`}
                  style={{ color: item.color }}
                >
                  {item.name}
                </p>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <img src={astro} className="inline-block w-40" />
          <div className="tech-logo">
            <div className="tech-bar">
              <div className="absolute w-full overlay"></div>
              {tech.map((item) => {
                return (
                  <img key={item.name} src={item.icon} className={`w-[80px]`} />
                );
              })}
            </div>
          </div>
        </div> */}
        {/* <AstroCanvas setOnHappy={() => {}} setOnSad={() => {}} /> */}
        <img src={logo} alt="loader" className="w-10 h-10 sm:w-28 sm:h-28" />
      </motion.div>
    </>
  );
};

export default SectionWrapper(
  Tech,
  'tech',
  'w-full text-center h-full flex flex-col items-center justify-center overflow-x-hidden'
);
