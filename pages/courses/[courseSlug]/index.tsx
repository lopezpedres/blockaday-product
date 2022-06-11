import React from "react";
import { GetServerSideProps } from "next";
import fetch from "isomorphic-fetch";
import MainContent from "../../Components/Courses/MainContent";
import SideMenu from "../../Components/Courses/SideMenu";

interface MockData {
  data: Data;
}

interface Data {
  name: string;
  courseSlug: string;
  description: string;
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
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-5 mx-auto">
      <SideMenu data={data} />
      <div className="lg:col-span-4 col-span-5  ">
        <div className=" p-8 max-full">
          <div className="p-8 mb-4">
            <h1 className="text-4xl font-bold mb-4 ">{data.data.name}</h1>
            <p className="text-lg">hh</p>
          </div>

          <div className="p-8 border-2 mb-10">
            <h2 className="text-2xl font-bold pb-2">Overview</h2>
            <p>{data.data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default moduleId;
