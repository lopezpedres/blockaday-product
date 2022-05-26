import React from "react";

const HeroHeader = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-3  mx-auto">
      <div className="px-6 pt-9 xl:pt-32 md:text-left max-w-xl mx-auto md:col-span-2">
        <h1 className="text-6xl md:text-7xl lg:text-6xl xl:text-6xl font-semibold">
          Learn without limits
        </h1>
        <p className="text-xl md:text-2xl mt-6 mb-6">
          {/* With Strapi we can easily update this text to whatever we want without having to touch the code. */}
          Start, switch, or advance your career with more than 5,000 courses,
          Professional Certificates, and degrees from world-class universities
          and companies.
        </p>
        <div className="flex flex-wrap md:flex-none text-xl">
          <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-4 px-16 lg:py-4 lg:px-10 w-80 lg:w-52 rounded h-auto mr-4 mb-4">
            Get started 
          </button>
          <button className="bg-transparent hover:text-blue-700 text-blue-500 font-semibold py-4 px-16 lg:py-4 lg:px-10 w-80 lg:w-52 border-4 h-auto border-blue-500 hover:border-blue-700 rounded mr-4 mb-4">
            Learn more
          </button>
        </div>
      </div>
      <div className="hidden md:block mx-auto pt-9 xl:pt-32 ">
        <img
          className=" md:object-scale-down h-48 w-96 xl:h-62 xl:w-auto"
          src="/images/hero-header.png"
          alt="hero header"
        />
      </div>
    </div>
  );
};

export default HeroHeader;
