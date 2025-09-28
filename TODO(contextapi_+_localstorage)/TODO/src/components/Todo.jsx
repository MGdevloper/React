import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useTodo } from '../context/todocontext.js'
function Todo({ todo, completed, id }) {
  let ManageTodo = useTodo()
  const [checked, setChecked] = useState(completed);
  const [todoText, setTodoText] = useState(todo);
  const [editing, setEditing] = useState(true);
  const inputRef=useRef("")
  useEffect(() => {
    // console.log(checked);
    ManageTodo.edittodo(id, { todo: todo, completed: checked, id: id })
  }, [checked])
  return (
    <div className='todo group w-full mt-3 max-w-3xl mx-auto p-4 sm:p-5 bg-white dark:bg-gray-900/60 backdrop-blur rounded-2xl shadow-md hover:shadow-xl border border-transparent sm:border-gray-100 transition-all duration-200 flex flex-col sm:flex-row items-center gap-3'>
      <div className='flex-1 w-full flex items-center gap-3'>

        <div className='flex items-center justify-center '>
          <input
            onChange={(e) => { setChecked(e.target.checked) }}
            checked={checked}
            type="checkbox"
            name=""
            id=""

            className='w-5 h-5  rounded-md text-emerald-600 border-gray-300 focus:ring-2 focus:ring-emerald-300'
          />
        </div>

        <div className='flex-1'>
          <input
            readOnly={editing}
            ref={inputRef}
            onChange={(e) => { setTodoText(e.target.value) }}
            value={todoText}
            type="text"
            className={`w-full ${checked ? 'line-through text-gray-400' : 'bg-transparent text-gray-900 dark:text-gray-100'}  placeholder-gray-400 border-0 focus:ring-0 text-sm sm:text-base truncate`}
            title={todo}
          />
        </div>
      </div>

      <div className='flex gap-2 items-center'>

        {
          completed?null:
          editing
            ?
            <button onClick={() => {
              inputRef.current.focus()
              setEditing(prev => !prev)
            }} className='edit inline-flex items-center gap-2 px-3 py-2 bg-emerald-200/90 hover:bg-emerald-300 text-black/80 rounded-md shadow-sm transition-transform active:scale-95 font-semibold'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4 h-4' aria-hidden>
                <path d="M12 20h9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" />
                <path d="M16.5 3.5l4 4L7.5 21H3v-4.5L16.5 3.5z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" />
              </svg>
              <span className='text-sm'>Edit</span>
            </button>
            :
            <button
              onClick={() => {
                setEditing(prev => !prev)
                ManageTodo.edittodo(id,{todo:todoText,completed:checked,id:id})
              }}
              className='save inline-flex items-center gap-2 px-3 py-2 bg-amber-200/90 hover:bg-amber-300 text-black/80 rounded-md shadow-sm transition-transform active:scale-95 font-semibold'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4 h-4' aria-hidden>
                <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" />
                <path d="M8 7V4h8v3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" />
              </svg>
              <span className='text-sm'>Save</span>
            </button>
            
        }





        <button onClick={() => { ManageTodo.removetodo(id) }} className='delete inline-flex items-center gap-2 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md shadow-sm transition-transform active:scale-95'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-4 h-4' aria-hidden>
            <path d="M3 6h18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" />
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" />
            <path d="M10 11v6M14 11v6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" />
          </svg>
          <span className='text-sm'>Remove</span>
        </button>
      </div>
    </div>
  )
}

export default Todo