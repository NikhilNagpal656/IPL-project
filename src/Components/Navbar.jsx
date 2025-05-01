import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import InpageNavigation from './InpageNavigation'

const Navbar = () => {
  return (
      <div className='bg-gray-600 text-white mx-auto w-full  min-h-screen lg:w-[50%] md:w-[50%]'>
      <InpageNavigation teams={[
        {title : "Matches" , path: "/"},
        {title : "News" , path : "/news"},
        {title : "Table" , path : "/pointstable"}
      ]}>

      </InpageNavigation>
      <Outlet/>
      {/* <div className='flex gap-2'>
        <Link to={"/"}><h1>Matches</h1></Link>
        <Link to={"/pointstable"}><h1>Table</h1></Link>
        </div> */}
      </div>
  )
}

export default Navbar