import { Github, Live, Folder } from '../icons';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { styles } from '../../styles';

import classes from './additionalProjects.module.css';

const AdditionalProject = ({
  name,
  live,
  github,
  idx,
  paragraph,
  inLink,
  tools,
}) => {
  return (
    <motion.li
      variants={fadeIn('up', 'spring', 0.05 * idx, 0.5)}
      className={`${classes.project_card} w-full p-8 rounded flex flex-col relative`}
    >
      <div className={`flex w-full justify-between items-center mb-8`}>
        <div className="folder">
          <Folder />
        </div>
        <div className="links">
          <div className={`flex justify-end gap-4 mt-3 z-10`}>
            {github && (
              <a
                href={github}
                rel="noreferrer noopener"
                target="_blank"
                className="z-10"
              >
                <Github />
              </a>
            )}
            {live && (
              <a
                href={live}
                rel="noreferrer noopener"
                target="_blank"
                className="z-10"
              >
                <Live />
              </a>
            )}
          </div>
        </div>
      </div>

      <div>
        <h3 className={`${styles.additionalProjectTitle}`}>
          <a
            href={live ? live : github}
            rel="noreferrer noopener"
            target="_blank"
          >
            {name}
          </a>
        </h3>
        <p className={`${styles.additionalProjectP}`}>
          {paragraph}
          {inLink && ' '}
          {inLink && (
            <a
              className={`${styles.projectInLink} link`}
              href={inLink.link}
              rel="noreferrer noopener"
              target="_blank"
            >
              {inLink.name}
            </a>
          )}
          .
        </p>
      </div>
      <ul className={`flex gap-4 mt-8 items-end h-full`}>
        {tools.map((t) => (
          <li className={`${styles.additionalProjectTools}`} key={t}>
            {t}
          </li>
        ))}
      </ul>
    </motion.li>
  );
};
export default AdditionalProject;
