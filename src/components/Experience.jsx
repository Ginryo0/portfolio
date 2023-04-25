import { motion } from 'framer-motion';
import { albonyan } from '../assets';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { experience } from '../constants';
import SectionWrapper from './hoc/SectionWrapper';

const Experience = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Where I've worked</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
        <div className="sm:w-3/4 w-full flex gap-5">
          <div>
            <img src={albonyan} alt="kalbonyan almarsos" className="w-[80px]" />
          </div>
          <div className="exp">
            <div className="flex gap-1 items-center">
              <h3 className={`${styles.sectionH3}`}>
                Software Engineer Intern
              </h3>
              <p className={`${styles.sectionLink}`}> @ </p>
              <a
                className={`${styles.sectionLink}`}
                href="https://www.albonyanalmarsos.org/"
              >
                Kalbonyan Almarsos
              </a>
            </div>
            <h4 className={`${styles.sectionH4} mb-8`}>Dec 2022 - Present</h4>
            <ul className="desc flex flex-col gap-4">
              <li className={`${styles.sectionText} relative ml-4`}>
                This internship aims to build our skills at{' '}
                <span className="text-tertiary">programming foundation </span>{' '}
                and <span className="text-tertiary">web developement</span>.
              </li>
              <li className={`${styles.sectionText} relative ml-4`}>
                Through this internship I was able to take courses with over
                <span className="text-tertiary"> 250h </span> of content based
                on these topics:{' '}
                <div className="ml-20 flex flex-col gap-1 mt-2">
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
                <span className="text-tertiary"> advanced level </span>tasks
                each focusing on one of on these topics:{' '}
                <div className="ml-20 grid grid-cols-2 gap-1 mt-2">
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
    </div>
  );
};

export default SectionWrapper(
  Experience,
  'experience',
  `h-screen w-full ${styles.padding} 
max-w-7xl mx-auto`
);
