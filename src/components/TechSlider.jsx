import { useState, useEffect, useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import { tech } from '../constants';

const TechSlider = () => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const x = useRef(0);

  // Calculate full width of one cycle
  // Get width of one loop (half of the duplicated content)
  // Calculate full width of one cycle
  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (containerRef.current) {
      x.current -= delta * 0.15; // adjust speed here
      if (Math.abs(x.current) >= width) {
        x.current = 0;
      }
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <div className="relative w-screen py-6 overflow-hidden bg-[#120d2656]">
      {/* Fading edges */}
      <div className="absolute top-0 left-0 z-10 w-16 h-full bg-gradient-to-r from-primary to-transparent" />
      <div className="absolute top-0 right-0 z-10 w-16 h-full bg-gradient-to-l from-primary to-transparent" />

      {/* Seamless duplicated slider */}
      <div
        ref={containerRef}
        className="flex gap-12 leading-[130%] text-[clamp(1.5rem,1rem+2.5vw,4rem)] font-[600] tracking-wide text-white whitespace-nowrap"
      >
        {[...tech, ...tech].map((tech, i) => (
          <>
            <span key={i} className="flex items-center text-white">
              {tech.name}
            </span>
            <span className="animated-text">✦</span>
          </>
        ))}
      </div>
    </div>
  );
};
export default TechSlider;
