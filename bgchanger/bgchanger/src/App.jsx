import { useState,useRef } from "react"
import Colorpicker from "./components/Colorpicker";

function App() {
  const [bgcolor, setbgcolor] = useState("white")
  const colorPickerinputRef = useRef(null);
  return (
    <>
      <Colorpicker ref={colorPickerinputRef} />
      <div className={`w-[100%] h-screen `} style={{ backgroundColor: bgcolor }}>

        <div className="fixed bottom-4 left-0 right-0 max-w-md mx-auto">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>

          <div className="relative">

            <input ref={colorPickerinputRef} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Test color..." required />
            
            <button onClick={() => {
              console.log("clicked");

              const value = document.getElementById("default-search").value

              setbgcolor(value)
            }} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enter</button>
          </div>
        </div>


      </div>

    </>
  )
}

export default App
