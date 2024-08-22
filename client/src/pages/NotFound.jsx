

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-extrabold text-gray-500 tracking-widest">404</h1>
      <div className="bg-blue-500 px-2 text-sm rounded rotate-12 absolute text-white">
        Page Not Found
      </div>
      <div className="mt-5 text-center">
        <p className="text-lg md:text-xl">
          We`re sorry, but the page you requested could not be found.
        </p>
        <a
          href="/"
          className="mt-5 inline-block px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
