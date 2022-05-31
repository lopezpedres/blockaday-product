import React from "react";
import Link from "next/link";

type CoursesType = {
  courseSlug: string;
  title: string;
  description: string;
  image: string;
  span: string;
}
type CourseProps = {
  courseMeta: CoursesType;
}
const CourseCard = ({courseMeta}:CourseProps) => {

  return (
    <div className="pt-1 m-2 w-64 h-auto hover:shadow-2xl shadow bg-[#00255d] ">
      <Link href={`/courses/${courseMeta.courseSlug}/module/1`}>
        <a>
          <div className="relative">
            <img
              src="images/hero-header.png"
              className="h-14 w-14 p-2 absolute bg-white bottom-0 left-4"
            />
            <img src="images/crypto-course.jpg" className="w-full" />
          </div>
          <div className="m-3 text-white p-3 ">
            <h3 className="text-lg pb-2">{courseMeta.title}</h3>
            <p className="mb-8">
              { courseMeta.description }
            </p>
            <span>{courseMeta.span}</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CourseCard;
