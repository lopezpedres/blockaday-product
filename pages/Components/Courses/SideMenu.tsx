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
  content?: ContentEntity[] | null;
}
interface ContentEntity {
  module: number;
  title: string;
  overview: string;
  objectives?: string[] | null;
}

const SideMenu = ({ data }: { data: MockData }) => {
  const { data: course } = data;
  const router = useRouter();
  const modules = course.content;

  return (
    <aside className="hidden lg:block  col-span-1">
      <img src={logo.src} className="h-28 my-5" />
      <ul>
        <li className="text-lg font-bold p-2 border-l-4 border-blue-600">
          Summary
        </li>
        {modules?.map((module) => (
          <Link
            key={module.module}
            href={`/courses/${router.query.courseSlug}/module/${module.module}`}
          >
            <a>
              <li
                key={module.module}
                className="pl-4 py-2 my-2 hover:bg-gray-100 rounded-sm"
              >
                <p>{module.title}</p>
              </li>
            </a>
          </Link>
        ))}
        <li className="text-lg font-bold p-2">Scores</li>
        <li className="text-lg font-bold p-2">Forum</li>
      </ul>
    </aside>
  );
};

export default SideMenu;
