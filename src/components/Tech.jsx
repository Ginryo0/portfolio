import { motion } from 'framer-motion';

import { slideIn, textVariant } from '../utils/motion';
import SectionWrapper from './hoc/SectionWrapper';
import { styles } from '../styles';
import { astro } from '../assets';
import { tech } from '../constants';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Tools</p>
        <h2 className={styles.sectionHeadText}>Tech</h2>
      </motion.div>
      <motion.div variants={slideIn('right', 'spring', 0.2, 2)}>
        <div className="tech-head mb-5">
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
              <div className="overlay absolute w-full"></div>
              {tech.map((item) => {
                return (
                  <img key={item.name} src={item.icon} className={`w-[80px]`} />
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(
  Tech,
  'tech',
  'w-full text-center h-full flex flex-col items-center justify-center overflow-x-hidden'
);
