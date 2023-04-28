import { motion } from 'framer-motion';
import { styles } from '../../styles';
import classes from './projects.module.css';
import { Github, Live } from '../icons';
import { fadeIn } from '../../utils/motion';

const Project = ({
  name,
  live,
  github,
  paragraph,
  tools,
  img,
  inLink,
  idx,
}) => {
  return (
    <motion.li
      variants={fadeIn('up', 'spring', 0.5 * idx, 1.5)}
      className={`${classes.project_item} w-full mb-16`}
    >
      <div
        className={`${classes.project_img} relative rounded overflow-hidden`}
      >
        <a
          href={live}
          className="w-full h-full absolute block"
          rel="noreferrer noopener"
          target="_blank"
        >
          <div
            className={`${classes.img_filter} w-full h-full absolute z-20`}
          ></div>
        </a>

        <img src={img}></img>
      </div>
      <div className={classes.project_content}>
        <p className={`${styles.projectSubTitle}`}>Featured Project</p>
        <h3 className={`${styles.projectTitle} ${classes.title}`}>
          <a href={live} rel="noreferrer noopener" target="_blank">
            {name}
          </a>
        </h3>
        <p className={`${styles.projectP} ${classes.project_text}`}>
          {paragraph}{' '}
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
        <ul className={`flex justify-end gap-4 mt-4 ${classes.flexed}`}>
          {tools.map((t) => (
            <li className={`${styles.projectTools}`} key={t}>
              {t}
            </li>
          ))}
        </ul>
        <div className={`flex justify-end gap-4 mt-3 ${classes.flexed}`}>
          <a href={github} rel="noreferrer noopener" target="_blank">
            <Github />
          </a>
          <a href={live} rel="noreferrer noopener" target="_blank">
            <Live />
          </a>
        </div>
      </div>
    </motion.li>
  );
};
export default Project;
