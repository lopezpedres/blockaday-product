import React from 'react'
import CourseVideo from '../../../../Components/CourseAssigments/CourseVideo'
import BreadCrumb from '../../../../Components/Courses/BreadCrumb'
import SideMenu from '../../../../Components/Courses/SideMenu'

const videoSlug = () => {
  return (
    <div>
        <div className="fixed  top-0 w-full h-16 border-2 text-center text-xl">We can use your navbar here</div>
        <div className='mt-16 grid grid-cols-1 md:grid-cols-5'>
        {/* <SideMenu/> */}
        <BreadCrumb/>
        <CourseVideo/>
        </div>
    </div>
  )
}

export default videoSlug