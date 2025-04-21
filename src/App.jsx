import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Hero,
  Navbar,
  About,
  Tech,
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

            <div
              className={`flex sm:flex-row flex-col md:min-h-screen w-full ${styles.paddingX} pt-4 sm:pt-0 justify-between items-center sm:gap-5 gap-12 max-w-[clamp(350px,100vw,1500px)] mx-auto`}
            >
              {/* gap-40 */}
              <About />

              <Tech />
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
