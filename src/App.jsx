import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Hero,
  Navbar,
  About,
  Achievements,
  Experience,
  Works,
  Contact,
  StarsCanvas,
  Loader,
  AdditionalWorks,
} from './components';

import { styles } from './styles';
import TechSlider from './components/TechSlider';
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      {!loading && (
        <>
          <Navbar />
          <div className="relative z-0 overflow-x-hidden bg-primary isolate">
            <div className="fixed top-0 z w-[clamp(500px,120vw,1200px)] aspect-square bg-gradient-radial-2 opacity-30 rounded-full blur-[5vw] animate-blob1"></div>
            <StarsCanvas />
            <Hero />

            <About />
            <TechSlider />

            <Experience />

            <Works />
            <AdditionalWorks />
            <div className="relative z-0">
              <Contact />

              <footer className="w-full font-medium text-center footer">
                &copy; Ahmed Zeid {new Date().getFullYear()}
              </footer>
            </div>
          </div>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
