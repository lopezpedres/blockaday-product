import React from "react";
import CourseArticle from "../../../../Components/CourseAssigments/CourseArticle";
import SideMenu from "../../../../Components/Courses/SideMenu";
import BreadCrumb from "../../../../Components/BreadCrumb/BreadCrumb";
const index = () => {
  return (
    <div>
      <BreadCrumb />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-5">
        {/* <SideMenu/> */}
        <CourseArticle />
      </div>
    </div>
  );
};

export default index;
