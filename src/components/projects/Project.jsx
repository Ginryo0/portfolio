import { AnimatePresence, motion } from 'framer-motion';
import { styles } from '../../styles';
import classes from './projects.module.css';
import { Github, Live } from '../icons';
import { fadeIn } from '../../utils/motion';
import React, { useState } from 'react';

const Project = ({ name, live, github, description, stack, images, idx }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      initial="initial"
      whileHover={'hovered'}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      variants={fadeIn('up', 'spring', 0.5 * idx, 1.5)}
      className={`${classes.project_item}  rounded w-full`}
    >
      <div
        className={`${classes.project_img} relative rounded overflow-hidden`}
      >
        <a
          href={live}
          className="absolute block w-full h-full"
          rel="noreferrer noopener"
          target="_blank"
        >
          <div
            className={`${classes.img_filter} w-full h-full absolute z-20`}
          ></div>
        </a>
        <motion.img
          src={images[0]}
          className="object-cover w-full h-full rounded"
          initial={{ opacity: 1 }}
          animate={{ opacity: hovered ? 0 : 1 }}
          alt={'Showcase of project: ' + name}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <AnimatePresence>
            {hovered &&
              images
                .slice(1)
                .map((src, index) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt={'Showcase of project: ' + name}
                    className="absolute object-cover w-full h-full rounded"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: (index + 1) * 1.5, duration: 0.5 }}
                  />
                ))}
          </AnimatePresence>
        </div>
      </div>
      <div className={classes.project_content}>
        <p className={`${styles.projectSubTitle}`}>Featured Project</p>
        <h3 className={`${styles.projectTitle} ${classes.title}`}>
          <a href={live} rel="noreferrer noopener" target="_blank">
            {name}
          </a>
        </h3>
        <p className={`${styles.projectP} ${classes.project_text}`}>
          {description.map(({ text, highlight }, idx) =>
            highlight ? (
              <span className="animated-text" key={idx}>
                {text}
              </span>
            ) : (
              <React.Fragment key={idx}>{text}</React.Fragment>
            )
          )}
        </p>
        <ul
          className={`flex flex-wrap justify-end gap-4 mt-4 ${classes.flexed}`}
        >
          {stack.map((t) => (
            <li className={`${styles.projectTools}`} key={t}>
              {t}
            </li>
          ))}
        </ul>
        <div className={`flex justify-end gap-4 mt-3 ${classes.flexed}`}>
          {!!github && (
            <a href={github} rel="noreferrer noopener" target="_blank">
              <Github />
            </a>
          )}
          <a href={live} rel="noreferrer noopener" target="_blank">
            <Live />
          </a>
        </div>
      </div>
    </motion.li>
  );
};
export default Project;
