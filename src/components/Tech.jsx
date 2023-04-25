import React from 'react';
import { styles } from '../styles';
import { astro } from '../assets';
import { tech } from '../constants';

const Tech = () => {
  return (
    <div className=" max-w-xl w-1/2 text-center h-full flex flex-col items-center justify-center">
      <p className={`${styles.sectionSubText} `}>Tools</p>
      <h2 className={styles.sectionHeadText}>Tech</h2>
      <div className="tech-head mb-5">
        <div className="roll-bar">
          {tech.map((item) => {
            return (
              <p
                key={item.name}
                className={`${styles.sectionSubText} text-tertiary font-para`}
              >
                {item.name}
              </p>
            );
          })}
        </div>
      </div>
      <div className="relative">
        <img src={astro} className="inline-block w-40" />
        <div className="tech-logo">
          <div className="tech-bar">
            <div className="overlay absolute w-full"></div>
            {tech.map((item) => {
              return (
                <img key={item.name} src={item.icon} className={`w-[80px]`} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
