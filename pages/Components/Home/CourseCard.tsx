import React from "react";

const CourseCard = () => {
  return (
    <div className="pt-1 w-64 h-auto hover:shadow-2xl shadow bg-[#00255d] cursor-pointer">
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
  );
};

export default CourseCard;
