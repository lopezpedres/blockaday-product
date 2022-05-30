import React from 'react'
import MainContent from '../../../Components/Courses/ContentMenu'
import SideMenu from '../../../Components/Courses/SideMenu'

const moduleId = () => {
  return (
    <div>
        <div className="fixed  top-0 w-full h-16 border-2 text-center text-xl">We can use your navbar here</div>
        <div className='mt-16 grid grid-cols-1 md:grid-cols-5'>
        <SideMenu/>
        <MainContent/>
        </div>
    </div>
  )
}

export default moduleId