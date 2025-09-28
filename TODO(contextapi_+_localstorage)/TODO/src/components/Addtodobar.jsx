import React, { useState } from 'react'
import { useTodo } from '../context/todocontext.js'
function Addtodobar({ onAdd }) {
    const [msg,setMsg]=useState('')
    const manageTodo=useTodo()
    
    function handleSubmit(e){
        e.preventDefault();
        
        msg.trim()==""?window.alert("Enter valid todo")
        :
        manageTodo.addtodo({todo:msg.trim(),completed:false,id:Date.now()})
        

    }
    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-3xl mx-auto p-4 sm:p-5 bg-white dark:bg-gray-900/50 rounded-2xl shadow-xl border border-transparent sm:border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            aria-label="Add todo"
        >
            <div className="flex-1 w-full">
                <label htmlFor="todo-input" className="sr-only">New task</label>

                <div className="flex items-center gap-3 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800/60 dark:to-gray-800/40 rounded-xl px-4 py-3 border border-gray-200 dark:border-gray-700 shadow-sm focus-within:shadow-md">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/30">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-emerald-600" aria-hidden>
                            <path d="M12 6v6l4 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="12" r="9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className="flex-1">
                        <input
                            id="todo-input"
                            onChange={(e)=>{setMsg(e.target.value)}}
                            type="text"
                            placeholder="Add a task — e.g. 'Buy groceries'"
                            className="w-full bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400 text-sm sm:text-base"
                        />
                        <p className="mt-1 text-xs text-gray-400">Press Enter to add — keep it short and clear.</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 active:scale-95 text-white rounded-lg shadow-lg transition-transform"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4" aria-hidden>
                        <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="hidden sm:inline">Add task</span>
                    <span className="sm:hidden">Add</span>
                </button>
            </div>
        </form>
    )
}

export default Addtodobar