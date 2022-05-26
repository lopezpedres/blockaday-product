import React from "react";

const HeroHeader = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="px-6 pt-9 text-center max-w-sm ">
        <h1 className="text-5xl font-semibold leading-10">Learn without<br/> limits</h1>
        <p className="text-xl mt-6 mb-6 tracking-tighter">
          Start, switch, or advance your career with more than 5,000 courses,
          Professional Certificates, and degrees from world-class universities
          and companies.
        </p>
        <div className="flex flex-wrap">
          <button className="">Get started</button>
          <button className="">Learn more</button>
        </div>
      </div>
      <div className="hidden lg:block ">
        <img
          className="rounded-full"
          src="/images/hero-header.jpg"
          alt="hero header"
        />
      </div>
    </div>
  );
};

export default HeroHeader;
