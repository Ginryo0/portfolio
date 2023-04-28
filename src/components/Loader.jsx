import { logo } from '../assets';

const Loader = () => {
  return (
    <div className="fixed bg-primary w-full h-screen z-50 flex items-center justify-center">
      <div className="loader">
        <img src={logo} alt="loader" className="w-10 h-10 sm:w-14 sm:h-14" />
      </div>
    </div>
  );
};

export default Loader;
