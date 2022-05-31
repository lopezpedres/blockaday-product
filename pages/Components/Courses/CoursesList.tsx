import React, { useState, useEffect } from "react";
import CourseCard from "../Home/CourseCard";
import fetch from "isomorphic-fetch";

type CoursesType = {
  courseSlug: string;
  title: string;
  description: string;
  image: string;
  span: string;
};

const CoursesList = () => {
  const [courses, setCourses] = useState<CoursesType[] | null>(null);

  useEffect(() => {
    const getCourses = async () => {
      const { data } = await fetch(
        "http://localhost:3000/api/courses/"
      ).then((res) => res.json());
      setCourses(data);
    };
    getCourses();
  }, []);

  return (
    <div className="flex flex-wrap">
      {courses &&
        courses.map((course) => (
          <div key={course.courseSlug}>
            <CourseCard courseMeta={course} />
          </div>
        ))}
    </div>
  );
};

export default CoursesList;
