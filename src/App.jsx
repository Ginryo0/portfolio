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
          <div className="relative z-0 bg-primary isolate">
            <div className="fixed top-0 z w-[clamp(500px,120vw,1200px)] aspect-square bg-gradient-radial-2 opacity-30 rounded-full blur-[5vw] animate-blob1"></div>
            <StarsCanvas />
            <Hero />

            {/* gap-40 */}
            <div
              className={`grid grid-cols-1 md:grid-cols-3 items-start md:mb-16 w-full ${styles.paddingX} pt-4 sm:pt-0 justify-between items-center lg:gap-8 md:gap-1 gap-4 max-w-[clamp(350px,100vw,1500px)] mx-auto`}
            >
              <About />

              <Achievements />
            </div>
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
