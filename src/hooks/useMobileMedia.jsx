import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const useWindowDimensions = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    // Listen for changes of screen size
    const mediaQuery = window.matchMedia('(max-width: 800px)');

    // Set initial value of 'isMobile' state
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to media query
    const handleMediaChange = (ev) => {
      setIsMobile(ev.matches);
      setWindowDimensions(getWindowDimensions());
    };

    // Add the callback function to handle changes
    window.addEventListener('resize', handleMediaChange);

    // Clear event listener
    return () => window.removeEventListener('resize', handleMediaChange);
  }, []);

  return { isMobile, windowDimensions };
};

export default useWindowDimensions;
