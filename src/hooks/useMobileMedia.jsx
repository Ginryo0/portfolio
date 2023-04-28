import { useState, useEffect } from 'react';

const useMobileMedia = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Listen for changes of screen size
    const mediaQuery = window.matchMedia('(max-width: 800px)');

    // Set initial value of 'isMobile' state
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to media query
    const handleMediaChange = (ev) => {
      setIsMobile(ev.matches);
    };

    // Add the callback function to handle changes
    mediaQuery.addEventListener('change', handleMediaChange);

    // Clear event listener
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  return isMobile;
};

export default useMobileMedia;
