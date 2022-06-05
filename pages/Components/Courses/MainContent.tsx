import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import checkImage from "../../../public/check.svg";

interface CourseSection {
  title: string;
  content: CourseSectionContent[];
}
interface CourseSectionContent {
  type: string;
  name: string;
  slug: string;
}
const MainContent = ({ sections }: { sections: CourseSection[]|undefined }) => {
  const router = useRouter();
  return (
    <div className="border-2">
      {sections?.map((item, index) => (
        <div key={index} className=" m-4 p-4 mb-4 border-b-2 ">
          <h1 className="text-2xl font-bold mb-4 ">{item.title}</h1>
          {item.content.map((assignment, index) => (
            <Link key={index} href={`/courses/${router.query.courseSlug}/material/${assignment.type}/${assignment.slug}`}>
              <a>
                <div
                  className="flex flex-wrap mb-4 py-4 hover:bg-gray-100 "
                >
                  <img src={checkImage.src} className="ml-2 h-5 w-5 " />
                  <h2 className="text-lg font-bold pl-10">{assignment.name}</h2>
                </div>
              </a>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MainContent;
