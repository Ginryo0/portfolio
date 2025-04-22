const Loader = () => {
  return (
    <div className="fixed z-50 flex items-center justify-center w-full h-screen bg-primary">
      <div className="loader">
        <img
          src={'/logo.svg'}
          alt="loader"
          className="w-10 h-10 sm:w-14 sm:h-14"
        />
      </div>
    </div>
  );
};

export default Loader;
