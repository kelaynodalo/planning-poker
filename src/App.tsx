import React from "react";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="p-4 text-center bg-white dark:bg-app-dark">
      <div className="flex flex-col-reverse justify-center items-center space-y-4 space-x-0 space-y-reverse min-h-screen text-white md:flex-row md:space-y-0 md:space-x-4">
        <div className="flex flex-col p-4 w-3/4 h-40 bg-app-mid/80 rounded-lg md:w-1/4">
          <h1>Start a Planning Session</h1>
          <div className="flex flex-col justify-center items-center h-3/4">
            <div>
              <button
                type="button"
                className="py-3 px-8 mr-1 mb-1 font-bold text-app-dark hover:text-white uppercase hover:bg-app-dark active:bg-app-dark rounded border border-app-dark outline-none focus:outline-none transition-all duration-150 ease-linear"
              >
                Leggo!
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 w-full h-40 bg-app-mid rounded-lg shadow-lg md:w-1/3">
          <h1>Join a Planning Session</h1>
          <div className="flex flex-col justify-center items-center space-y-2 h-3/4">
            <div className="pt-0 mb-3">
              <input
                placeholder="Enter Session Code"
                autoComplete="off"
                className="py-4 px-3 w-full text-base text-center text-app-dark placeholder:text-slate-300 bg-white rounded border-0 outline-none focus:outline-none focus:ring focus:ring-app shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
