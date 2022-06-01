import Link from "next/link";
import React from "react";
import logo from "../../../public/images/hero-header.png";
import { useRouter } from "next/router";

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
}

const SideMenu = ({data}:{data:MockData}) => {
  const {data:course} = data
  const router = useRouter()
  const modules = course.content

  return (
    <nav className="col-span-1 overflow-auto">
      <img src={logo.src} className="h-28 mx-auto my-5" />
      <ul className="pl-16">
        <li className="text-lg font-bold p-2 border-l-4 border-blue-600">
          Summary
        </li>
        {modules?.map((module) => (
          <li key={module.module} className="pl-8 py-2 my-2 hover:bg-gray-100 rounded-sm">
            <Link href={`/courses/${router.query.courseSlug}/module/${module.module}`} >
              <a>{module.title}</a>
            </Link>
          </li>
        ))}
        <li className="text-lg font-bold p-2">Scores</li>
        <li className="text-lg font-bold p-2">Forum</li>
      </ul>
    </nav>
  );
};

export default SideMenu;
