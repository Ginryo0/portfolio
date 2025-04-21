import SectionWrapper from './hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { Projects } from './projects';

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="w-full mx-auto text-center"
      >
        <p className={`${styles.sectionSubText} `}>Portfolio</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <Projects />
    </>
  );
};

const WorksSection = SectionWrapper(
  Works,
  'work',
  `w-full ${styles.paddingX} 
max-w-[clamp(350px,100vw,1500px)] mx-auto pt-0`
);
export default WorksSection;
