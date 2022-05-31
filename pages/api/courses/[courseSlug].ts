// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface OneCourse {
  data?: CourseInterface;
  error?: string;
}
type CourseType = {
  module: number;
  title: string;
  overview: string;
  objectives: string[];
};
interface CourseInterface {
  name: string;
  courseSlug: string;
  content: CourseType[];
}

const courses: CourseInterface[] = [
  {
    name: "Basics of Crypto",
    courseSlug: "basics-crypto",
    content: [
      {
        module: 1,
        title: "Basics of Crypto - Module 1",
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phaselluseget nisl velit. Etiam euismod, ipsum eget consectetur consectetur,nisi nisl tincidunt nisi, eget",
        objectives: ["Objective 1", "Objective 2", "Objective 3"],
      },
      {
        module: 2,
        title: "Basics of Crypto - Module 2",
        overview:
          "Learn the basics of blockchain and how to use it to your advantage",
        objectives: ["Objective 1", "Objective 2", "Objective 3"],
      },
      {
        module: 3,
        title: "Basics of Crypto - Module 3",
        overview:
          "Learn the basics of blockchain and how to use it to your advantage",
        objectives: ["Objective 1", "Objective 2", "Objective 3"],
      },
    ],
  },
  {
    name: "Basics of Blockchain",
    courseSlug: "basics-blockchain",
    content: [
      {
        module: 1,
        title: "Basics of Blockchain - Module 1",
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phaselluseget nisl velit. Etiam euismod, ipsum eget consectetur consectetur,nisi nisl tincidunt nisi, eget",
        objectives: ["Objective 1", "Objective 2", "Objective 3"],
      },
      {
        module: 2,
        title: "Basics of Blockchain - Module 2",
        overview:
          "Learn the basics of blockchain and how to use it to your advantage",
        objectives: ["Objective 1", "Objective 2", "Objective 3"],
      },
      {
        module: 3,
        title: "Basics of Blockchain - Module 3",
        overview:
          "Learn the basics of blockchain and how to use it to your advantage",
        objectives: ["Objective 1", "Objective 2", "Objective 3"],
      },
    ],
  },
];

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
