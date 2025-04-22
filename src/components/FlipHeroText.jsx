import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipHeroText = ({ children, href }) => {
  return (
    <motion.h1
      initial="initial"
      whileHover="hovered"
      className={`${styles.heroHeadText} relative block uppercase whitespace-nowrap overflow-hidden text-white sm:leading-[0.8]`}
    >
      <div>
        {children.split('').map((l, i) => {
          if (l === ' ') {
            return <span key={i}>&nbsp;</span>;
          }
          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: '-100%',
                },
              }}
              transition={{
                duration: DURATION,
                ease: 'easeInOut',
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split('').map((l, i) => {
          if (l === ' ') {
            return <span key={i}>&nbsp;</span>;
          }
          return (
            <motion.span
              variants={{
                initial: {
                  y: '100%',
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: 'easeInOut',
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.h1>
  );
};

export default FlipHeroText;
