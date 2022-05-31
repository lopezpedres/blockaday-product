// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface Test {
  data: CoursesType[]
}
type CoursesType = {
  courseSlug: string;
  title: string;
  description: string;
  image: string;
  span: string;
};

const courses:CoursesType[] = [{
  courseSlug: "basics-crypto",
  title: "Basics of Crypto",
  description: "Learn the basics of crypto and how to use it to your advantage",
  span: "PROFESSIONAL CERTIFICATE",
  image:
    "/images/courses/crypto-course.jpg"
},
{
  courseSlug: "basics-blockchain",
  title: "Basics of Blockchain",
  description: "Learn the basics of blockchain and how to use it to your advantage",
  span: "PROFESSIONAL CERTIFICATE",
  image:
    "/images/courses/crypto-course.jpg",
}
];
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Test>
) {
  res.status(200).json({"data":courses});
}

