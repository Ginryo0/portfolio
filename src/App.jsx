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
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      {!loading && (
        <>
          <Navbar />
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Hero />
            </div>
            <div
              className={`flex sm:flex-row flex-col min-h-screen w-full ${styles.paddingX} pt-40 sm:pt-0 justify-between items-center sm:gap-5 gap-40 max-w-7xl mx-auto`}
            >
              <About />

              <Tech />
            </div>
            <Experience />

            <Works />
            <AdditionalWorks />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
              <footer className="footer w-full text-center font-medium">
                &copy; Ahmed Zeid 2023.
              </footer>
            </div>
          </div>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
