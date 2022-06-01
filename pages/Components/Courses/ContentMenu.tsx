import { useRouter } from "next/router";
import React from "react";
import MainContent from "./MainContent";

interface MockData {
  data: Data;
}

interface Data {
  name: string;
  courseSlug: string;
  content?: (ContentEntity)[] | null;
}
 interface ContentEntity {
  module: number;
  title: string;
  overview: string;
  objectives?: (string)[] | null;
  sections?: CourseSection[];
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


const ContentMenu = ({data}:{data:MockData}) => {
  const {data:course} = data
  const router = useRouter()
  const {moduleId} = router.query
  const module = course.content?.find((item) => item.module.toString() === moduleId)
  return (
    <div className="col-span-4 ">
      <div className="max-w-3xl mx-auto">
        <div className="p-8 mb-4">
          <h1 className="text-4xl font-bold mb-4 ">{module?.title}</h1>
          <p className="text-lg">hh</p>
        </div>

        <div className="p-8 border-2 mb-10">
          <h2 className="text-2xl font-bold pb-2">Overview</h2>
          <p>
          {module?.overview}
          </p>
        </div>

        <div className="p-8 border-2 mb-10">
          <h2 className="text-2xl font-bold pb-2">Objectives</h2>
          <ul className="list-disc p-4">
            {module?.objectives?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <MainContent sections={module?.sections} />
      </div>
    </div>
  );
};

export default ContentMenu;

