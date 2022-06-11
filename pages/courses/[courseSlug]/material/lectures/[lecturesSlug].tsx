import React from "react";
import CourseArticle from "../../../../Components/CourseAssigments/CourseArticle";
import SideMenu from "../../../../Components/Courses/SideMenu";
import BreadCrumb from "../../../../Components/Courses/BreadCrumb";
const index = () => {
  return (
    <div>
      <div className="  top-0 w-full h-16 border-2 text-center text-xl">
        We can use your navbar here
      </div>
      <BreadCrumb />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-5">
        {/* <SideMenu/> */}
        <CourseArticle />
      </div>
    </div>
  );
};

export default index;
