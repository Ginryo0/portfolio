import { motion } from 'framer-motion';

import { styles } from '../styles';
import { slideIn, textVariant } from '../utils/motion';
import SectionWrapper from './hoc/SectionWrapper';
import Achievements from './Achievements';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="md:col-span-2">
        <p className={`${styles.sectionSubText} `}>Overview</p>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>
      <div className="grid items-center justify-between grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8 md:gap-1">
        <motion.article
          variants={slideIn('left', 'spring', 0.2, 2)}
          className="flex flex-col gap-8 md:col-span-2"
        >
          <p className={styles.sectionText}>
            I’m a <span className="animated-text"> Full-Stack Developer</span>,
            with a couple of years of hands-on experience building{' '}
            <span className="animated-text">AI-powered Web Apps</span>, SaaS
            platforms, and Chrome extensions. I’m all about blending creativity
            with functionality to deliver intuitive, polished digital products.
          </p>
          <p className={styles.sectionText}>
            Driven by curiosity and a love for emerging tech, I build{' '}
            <span className="animated-text">interactive tools</span> that spark
            engagement and streamline user experience. From chatbot generators
            to dashboards, my focus is on creating polished,{' '}
            <span className="animated-text">forward-thinking</span> web apps
            that feel as good as they function.
          </p>
        </motion.article>

        <Achievements />
      </div>
    </>
  );
};

export default SectionWrapper(
  About,
  'about',
  `md:mb-16 w-full ${styles.paddingX} pt-4 sm:pt-0  max-w-[clamp(350px,100vw,1500px)] mx-auto`
);
