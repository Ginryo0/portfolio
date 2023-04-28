import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // update position state
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    // add event listener to scrolling to update position
    window.addEventListener('scroll', updatePosition);

    // updating position for the first time
    updatePosition();

    // clearing old listener
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
