import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { slideIn, textVariant } from '../utils/motion';
import SectionWrapper from './hoc/SectionWrapper';

const About = () => {
  const variant = "slideIn('left', 'ease-in', 0, 0.3)";
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <img src={astro} style={{ opacity: '0.5', width: '20%' }} /> */}
        <p className={`${styles.sectionSubText} `}>Overview</p>
        <h2 className={styles.sectionHeadText}>About</h2>
        <p className={styles.sectionText}>
          Hello! My name is <span className="text-tertiary">Ahmed</span> and I
          am a <span className="text-tertiary">web developer</span>.
        </p>
        <p className={styles.sectionText}>
          I have a true passion for creating digital experiences that come to
          life on the internet.
        </p>
        <p className={styles.sectionText}>
          I am constantly seeking to improve my skills and knowledge.
        </p>
        <p className={styles.sectionText}>
          With a keen eye for detail and a deep understanding of web development
          technologies, I am confident in my ability to create
          <span className="text-tertiary"> innovative </span>and
          <span className="text-tertiary"> effective </span> solutions that meet
          the needs of both clients and users.
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, 'about', ' max-w-xl w-1/2');
