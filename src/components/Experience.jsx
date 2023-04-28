import { motion } from 'framer-motion';
import { albonyan } from '../assets';
import { slideIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { experience } from '../constants';
import SectionWrapper from './hoc/SectionWrapper';

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="w-3/4">
        <p className={`${styles.sectionSubText} `}>Where I've worked</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>
      <motion.div variants={slideIn('down', 'tween', 0, 1.5)}>
        <div className="mx-auto">
          <div>
            <img src={albonyan} alt="kalbonyan almarsos" className="w-[80px]" />
          </div>
          <div className="exp">
            <div className="flex sm:gap-1 sm:flex-row sm:items-center sm:mb-2 mt-4 mb-2 flex-col">
              <h3 className={`${styles.sectionH3} mb-0`}>
                Software Engineering Intern
              </h3>
              <div className="flex gap-1">
                <p className={`${styles.sectionLink}`}> @ </p>
                <a
                  className={`${styles.sectionLink} link`}
                  href="https://www.albonyanalmarsos.org/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Kalbonyan Almarsos
                </a>
              </div>
            </div>
            <h4 className={`${styles.sectionH4} mb-8`}>Dec 2022 - Present</h4>
            <ul className="desc flex flex-col gap-4">
              <li className={`${styles.sectionText} relative ml-4`}>
                This internship aims to develop our skills at{' '}
                <span className="text-white-300">programming foundation </span>{' '}
                and <span className="text-white-300">web development</span>.
              </li>
              <li className={`${styles.sectionText} relative ml-4`}>
                Through this internship I was able to take courses of over
                <span className="text-white-300"> 250h </span> of content on
                these topics:{' '}
                <div className="sm:ml-16 ml-10 flex flex-col gap-1 mt-2">
                  {experience.topics.map((item) => (
                    <span
                      key={item}
                      className={`${styles.sectionLi} relative li-span`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </li>
              <li className={`${styles.sectionText} relative ml-4`}>
                I also had to do 4
                <span className="text-white-300"> advanced level </span>tasks by
                myself each focusing on one of these topics:{' '}
                <div className="sm:ml-16 ml-10 grid grid-cols-2 gap-1 mt-2">
                  {experience.tasks.map((item) => (
                    <span
                      key={item}
                      className={`${styles.sectionLi} relative li-span`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(
  Experience,
  'experience',
  `min-h-screen w-full ${styles.padding} 
max-w-7xl mx-auto pb-40`
);
