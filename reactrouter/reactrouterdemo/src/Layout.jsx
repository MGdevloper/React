import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './compponents/Navbar'

function Layout() {
  
  return (
    <>
        <Navbar/>
        <div className='w-full  bg-[#00000040] text-white text-semibold flexn justify-center items-center'>

            {Outlet ? <Outlet/> : <p>No content available</p>}
        </div>
    </>
  )
}

export default Layout