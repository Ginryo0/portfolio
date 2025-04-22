import React, { useState, useEffect, useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';
import { tech } from '../constants';
import { styles } from '../styles';

const TechSlider = () => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const x = useRef(0);

  // Calculate full width of one cycle
  // Get width of one loop (half of the duplicated content)
  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (containerRef.current) {
      x.current -= delta * containerRef.current.scrollWidth * 0.000028; // adjust speed here
      if (Math.abs(x.current) >= width) {
        x.current = 0;
      }
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <div className={`overflow-hidden ${styles.paddingY} mb-4`}>
      <div className="relative w-screen md:py-6 py-3  bg-[#120d2656] border-b border-t  border-t-tertiary border-b-tertiary">
        {/* Fading edges */}
        <div className="absolute -top-[1px] left-0 z-10 lg:w-[25vw] w-[15vw] h-[calc(100%+2px)] bg-gradient-to-r from-primary to-transparent" />
        <div className="absolute -top-[1px] right-0 z-10 lg:w-[25vw] w-[15vw] h-[calc(100%+2px)] bg-gradient-to-l from-primary to-transparent" />

        {/* Seamless duplicated slider */}
        <div
          ref={containerRef}
          className="flex md:gap-12 gap-4 leading-[1.3] text-[clamp(1.5rem,1rem+2.5vw,4rem)] font-[600] tracking-wide text-white whitespace-nowrap"
        >
          {[...tech, ...tech, ...tech].map((tech, i) => (
            <React.Fragment key={i}>
              <span key={i} className="flex items-center text-white">
                {tech.name}
              </span>
              <span className="animated-text">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TechSlider;
