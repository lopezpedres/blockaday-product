import React from "react";
import CourseQuizz from "../../../../Components/CourseAssigments/CourseQuizz";
import SideMenu from "../../../../Components/Courses/SideMenu";

const index = () => {
  return (
    <div className="mt-16 grid grid-cols-1 ">
      {/* <SideMenu/>   */}
      <CourseQuizz />
    </div>
  );
};

export default index;
