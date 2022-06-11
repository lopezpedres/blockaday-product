import React from 'react'
import Navbar from '../Navbar/Navbar';

interface LayoutProps {
    children: React.ReactNode;
 }

const Layout = ({children}:LayoutProps) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout