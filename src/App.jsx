import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
  CanvasLoader,
} from './components';

import { styles } from './styles';
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CanvasLoader />}>
        <Navbar />
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Hero />
          </div>
          <div
            className={`flex sm:flex-row flex-col h-screen w-full ${styles.padding} py-80 justify-between items-center gap-5 max-w-7xl mx-auto`}
          >
            <About />

            <Tech />
          </div>
          <div className="flex flex-col">{/* <Experience /> */}</div>

          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
