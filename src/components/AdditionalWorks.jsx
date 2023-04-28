import SectionWrapper from './hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { AdditionalProjects } from './projects';

const AdditionalWorks = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="w-full text-center mx-auto"
      >
        <p className={`${styles.sectionSubText} `}>Other noteworthy projects</p>
        <h2 className={styles.sectionHeadText}>Additional Projects</h2>
      </motion.div>
      <AdditionalProjects />
    </>
  );
};
const AdditionalWorksComponent = SectionWrapper(
  AdditionalWorks,
  'more_works',
  `min-h-screen w-full ${styles.padding} 
max-w-7xl mx-auto`
);
export default AdditionalWorksComponent;
