import React from 'react';
import { logo } from '../assets';

const Loader = () => {
  return (
    <div className="relative- bg-primary w-full h-screen">
      <div className="loader">
        <img src={logo} alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
