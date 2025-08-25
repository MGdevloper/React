import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
function Users() {
  const [UserId, setUserId] = useState("")
  // const inputRef=useRef()
  // const navlinkref=useRef()
  return (
    <div className='flex justify-center items-center h-20  gap-3'>
      <input onChange={(e) => setUserId(e.target.value)} type="text" className='p-2 text-center text-gray-700 rounded-md bg-white placeholder:text-gray-500' placeholder='Search Users...' />

      <NavLink to={`/users/${UserId}`}>


        <button

          className='text-gray-800 p-2 hover:scale-105 hover:cursor-pointer rounded-md bg-white'>

          Search

        </button>
      </NavLink>
    </div>
  )
}

export default Users