import React from "react";
import CoursesList from "../Courses/CoursesList";
import CourseCard from "./CourseCard";
// import Caroussel from './Caroussel'

const HeroCourses = () => {
  return (
    <div className="container w-full mx-auto ">
      <div className=" pt-16">
        <h3 className="text-xl font-semibold text-[#382d8b] pb-4">
          Free Courses Available
        </h3>
        <h1 className="text-5xl pb-4">Get ready for your next career</h1>
        <p className="text-xl pb-8">
          Break into the world of bloacking and learn the skills you need to
          become a professional.
        </p>
      </div>

      {/* //TODO: Here we have to add the caroussel once we have more courses */}
      {/* <Caroussel/> */}
      <CoursesList/>
    </div>
  );
};

export default HeroCourses;
