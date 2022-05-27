import React from "react";
// import Caroussel from './Caroussel'

const HeroCourses = () => {
  return (
    <div className="container w-full mx-auto">
      <div className="px-16 pt-16">
        <h3 className="text-xl font-semibold text-[#382d8b] pb-4">
          Free Courses Available
        </h3>
        <h1 className="text-5xl pb-4">Get ready for your next career</h1>
        <p className="text-xl pb-8">
          Break into the world of bloacking and learn the skills you need to
          become a professional.
        </p>
      </div>
      <div className="pt-1 px-16">
        {/* //TODO: Here we have to add the caroussel once we have more courses */}
        {/* <Caroussel/> */}
        <div className="w-64 h-auto bg-[#00255d]">
          <div className="relative">
            <img
              src="images/hero-header.png"
              className="h-14 w-14 p-2 absolute bg-white bottom-0 left-4"
            />
            <img src="images/crypto-course.jpg" className="w-full" />
          </div>
          <div className="m-3 text-white p-3 ">
            <h3 className="text-lg pb-2">Basics of Crypto</h3>
            <p className="mb-8">
              Learn the basics of crypto and how to use it to your advantage.
            </p>
            <span>PROFESSIONAL CERTIFICATE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCourses;
