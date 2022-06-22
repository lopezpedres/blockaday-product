import React, { useContext, useState } from "react";
import MainContent from "../../../Components/Courses/ContentMenu";
import SideMenu from "../../../Components/Courses/SideMenu";
import { GetServerSideProps } from "next";
import fetch from "isomorphic-fetch";
import BreadCrumb from "../../../Components/Courses/BreadCrumb";

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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const course: MockData = await fetch(
    `http://localhost:3000/api/courses/${params?.courseSlug}`
  ).then((res) => res.json());
  return {
    props: {
      data: course,
    },
  };
};
const moduleId = ({ data }: { data: MockData }) => {
  const [showSideMenu, setShowSideMenu] = useState(false)
  return (
    <div>
         <button
         onClick={()=>setShowSideMenu(!showSideMenu)}
        className=" lg:hidden sticky left-0 top-16 p-1  bg-blue-800 rounded-sm"
      >
        <p className="font-bold text-white">Modules</p>
      </button>
      <BreadCrumb/>
      <div className=" grid grid-cols-1 lg:grid-cols-5 mx-auto">
        <SideMenu data={data} showSideMenu={showSideMenu} />
        <MainContent data={data} />
      </div>
    </div>
  );
};

export default moduleId;
