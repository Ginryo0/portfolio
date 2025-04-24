import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { EXPERIENCES } from '../constants';
import SectionWrapper from './hoc/SectionWrapper';

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="w-3/4">
        <p className={`${styles.sectionSubText} `}>Where I've worked</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>
      <div className="grid items-center grid-cols-1 gap-4 mx-auto lg:gap-8 lg:grid-cols-2 lg:grid-rows-2">
        {EXPERIENCES.map((exp, idx) => (
          <motion.article
            key={exp.company}
            variants={slideIn('down', 'spring', 0.4, 2)}
            className={`
              ${idx === 0 && 'lg:col-span-2 lg:row-span-2'}
            `}
          >
            <div className="w-full p-4 space-y-2 text-white border rounded-lg shadow-md sm:space-y-4 md:p-8 bg-primary-semi border-tertiary md:rounded-2xl hover:text-tertiary">
              <div className="flex flex-col gap-1">
                <h3 className={`${styles.sectionH3} mb-0 text-inherit`}>
                  {exp.title} <span>&middot;</span> {exp.company}
                </h3>
                <h4 className={`${styles.sectionH4}`}>{exp.date}</h4>
              </div>

              <ul className="flex flex-col gap-2 desc">
                {exp.description.map((desc, idx) => (
                  <li
                    className={`text-white-300 font-para md:tracking-wider sm:text-[0.9375rem] text-[0.8125rem] relative ml-4`}
                    key={idx}
                  >
                    {desc}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-1">
                {exp.stack.map((tech, idx) => (
                  <li
                    className={`px-2 py-[2px] rounded-xl bg-tertiary-transparent text-[0.75rem] text-tertiary relative`}
                    key={idx}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(
  Experience,
  'experience',
  `w-full ${styles.padding} 
max-w-[clamp(350px,100vw,1500px)] mx-auto`
);
