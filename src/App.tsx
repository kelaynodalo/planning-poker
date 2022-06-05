import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="text-center">
      <header className="bg-app-dark flex flex-col min-h-screen items-center justify-center text-base text-app-light">
        <img src={logo} className="motion-safe:animate-pulse" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default App;
