import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-[5px] backdrop-saturate-[180%] bg-[#fffc] shadow-md h-14 flex items-center justify-center">
        <div className="flex gap-8">
          <NavLink
            to="/Home"
            className={({ isActive }) =>
              `px-3 py-1 text-black font-semibold transition-all duration-200 ${isActive ? 'border-b-2 border-black' : 'hover:border-b-2 hover:border-black'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              `px-3 py-1 text-black font-semibold transition-all duration-200 ${isActive ? 'border-b-2 border-black' : 'hover:border-b-2 hover:border-black'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `px-3 py-1 text-black font-semibold transition-all duration-200 ${isActive ? 'border-b-2 border-black' : 'hover:border-b-2 hover:border-black'
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `px-3 py-1 text-black font-semibold transition-all duration-200 ${isActive ? 'border-b-2 border-black' : 'hover:border-b-2 hover:border-black'
              }`
            }
          >
            User
          </NavLink>
        </div>
      </nav>
      <div className="h-14 w-full flex justify-center items-center" >
            
      </div> 
    </>
  )
}

export default Navbar