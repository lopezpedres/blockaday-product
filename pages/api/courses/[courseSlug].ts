// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dataCourses from "../../data.js";

interface OneCourse {
  data?: CourseInterface;
  error?: string;
}
type CourseType = {
  module: number;
  title: string;
  overview: string;
  objectives: string[];
  sections?: CourseSection[];
};
interface CourseInterface {
  name: string;
  courseSlug: string;
  content: CourseType[];
}
interface CourseSection {
  title: string;
  content: CourseSectionContent[];
}
interface CourseSectionContent {
  type: string;
  name: string;
  slug: string;
}

const courses: CourseInterface[] = dataCourses;

const getCourse = (courseQuery: string) =>
  courses.find((course: CourseInterface) => course.courseSlug === courseQuery);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<OneCourse>
) {
  const filteredCourse = getCourse(req.query.courseSlug as string);
  if (!filteredCourse) {
    return res.status(404).json({ error: "Course not found" });
  } else {
    res.status(200).json({ data: filteredCourse });
  }
}
