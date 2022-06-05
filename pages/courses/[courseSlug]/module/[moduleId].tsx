import React from 'react'
import MainContent from '../../../Components/Courses/ContentMenu'
import SideMenu from '../../../Components/Courses/SideMenu'
import { GetServerSideProps } from 'next'
import fetch from 'isomorphic-fetch'


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



export const getServerSideProps: GetServerSideProps = async ({params}) =>{
  const course:MockData = await fetch(`http://localhost:3000/api/courses/${params?.courseSlug}`).then(res => res.json())
  return {
    props: {
      data:course
    },
  };
}
const moduleId = ({data}:{data:MockData}) => {
  return (
    <div className='2xl:max-w-5xl mx-auto lg:px-16 md:px-8 px-4'>
        <div className="  top-0 w-full h-16 border-2  text-xl">We can use your navbar here</div>
        <div className='mt-16 grid grid-cols-1 lg:grid-cols-5 mx-auto'>
        <SideMenu data={data}/>
        <MainContent data={data}/>
        </div>
    </div>
  )
}

export default moduleId