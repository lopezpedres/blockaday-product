import Link from "next/link";
import React from "react";
import logo from "../../../public/images/hero-header.png";
import { useRouter } from "next/router";

const SideMenu = () => {
  type moduleType={
    id:number,
    name:string,
  }
  const modules:moduleType [] = [{name:"Module 1", id:1}, {name:"Module 2", id:2}, {name:"Module 3", id:3}];
  const router = useRouter();

  return (
    <nav className="col-span-1 overflow-auto">
      <img src={logo.src} className="h-28 mx-auto my-5" />
      <ul className="pl-16">
        <li className="text-lg font-bold p-2 border-l-4 border-blue-600">
          Summary
        </li>
        {modules.map((module) => (
          <li key={module.id} className="pl-8 py-2 my-2 hover:bg-gray-100 rounded-sm">
            <Link href={`/courses/${router.query.courseSlug}/module/${module.id}`} >
              <a>{module.name}</a>
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
