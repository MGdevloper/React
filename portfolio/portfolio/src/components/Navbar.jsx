import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { usetheme } from '../context/themecontext'
function Navbar() {
    const toggle = useRef("")
    const [checked, setchecked] = useState(true)//true->light , false->dark
    const { lighttheme, darktheme } = usetheme()

    useEffect(() => {
        checked ? lighttheme() : darktheme()
    }, [checked])
    return (
        <div className='navbar flex justify-between items-center w-full h-[50px] bg-[#ffffff9d] dark:bg-[#000c] backdrop-filter-[5px] border-b-2 dark:border-[#ffffff38]'>

            <div className='ml-4 font-semibold text-xl dark:text-white font'>
                <span className='text-orange-600' >
                    Ｍｇ
                </span> ｄｅｖｌｏｐｅｒ

            </div>
            <input value={checked} className='invisible' type="checkbox" />
            <div className='absolute right-14'>
                <button
                    aria-label="Toggle dark mode"
                    onClick={() => setchecked(prev => !prev)}
                    className={`relative w-14 h-8 flex items-center rounded-full transition-colors duration-300
      ${checked
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                            : 'bg-gradient-to-r from-indigo-700 via-purple-700 to-gray-900'}
      border-2 border-gray-300 dark:border-indigo-500 shadow-lg`}
                    style={{ outline: 'none', border: 'none' }}
                >
                    <span
                        className={`absolute left-1 top-1 w-6 h-6 flex items-center justify-center rounded-full transition-transform duration-300
        ${checked
                                ? 'translate-x-0 bg-white'
                                : 'translate-x-6 bg-indigo-500 shadow-[0_0_8px_2px_rgba(99,102,241,0.5)]'}`}
                    >
                        {checked ? (
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="6" fill="#FBBF24" />
                                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#F59E42" strokeWidth="2" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="#fff" />
                            </svg>
                        )}
                    </span>
                </button>
            </div>
            <div>
            
            </div>
        </div>
    )
}

export default Navbar