import React, { useContext } from "react";

function Hero() {
  return (
    <div className="card justify-center h-96 bg-base-200 m-4">
      <div className="hero-content text-center mx-auto">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">React Firebase Login</h1>
          <p className="py-6">
            A base template to implement a Firebase login system React.
          </p>
          <a className="btn btn-primary" href="/login">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
