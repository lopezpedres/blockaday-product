import React from "react";
import ContentMenu from "./MainContent";
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'
import fetch from "isomorphic-fetch"

type ModuleProps = {
  courseSlug: string;
  moduleId: string;
}
const MainContent = ({course}:InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(course)
  return (
    <div className="col-span-4 ">
      <div className="max-w-3xl mx-auto">
        <div className="p-8 mb-4">
          <h1 className="text-4xl font-bold mb-4 ">Module 1</h1>
          <p className="text-lg">Intro to blockchain</p>
        </div>

        <div className="p-8 border-2 mb-10">
          <h2 className="text-2xl font-bold pb-2">Overview</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eget nisl velit. Etiam euismod, ipsum eget consectetur consectetur,
            nisi nisl tincidunt nisi, eget
          </p>
        </div>

        <div className="p-8 border-2 mb-10">
          <h2 className="text-2xl font-bold pb-2">Objectives</h2>
          <ul className="list-disc p-4">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Phasellus eget nisl velit. Etiam euismod, ipsum eget</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        <ContentMenu />
      </div>
    </div>
  );
};

export default MainContent;

export const getServerSideProps: GetServerSideProps = async ({params}) =>{
  const course = await fetch(`http://localhost:3000/api/courses/${params?.courseSlug}`).then(res => res.json())
  return {
    props: {
      course
    },
  };
}
