import { useState } from 'react'
import { Themecontextprovider } from './context/themecontext'
import './index.css'
import Topsection from './components/Topsection'
import Navbar from './components/Navbar'
function App() {
  const [theme,settheme]=useState("light")

  const lighttheme=()=>{      
    document.querySelector("body").classList.remove(theme)
    document.querySelector("body").classList.add("light")


    document.querySelector("#themecss").href="./src/themebackground/light.css"

    settheme("light")
  }

  const darktheme =()=>{
     document.querySelector("body").classList.remove(theme)
    document.querySelector("body").classList.add("dark")

    document.querySelector("#themecss").href="./src/themebackground/dark.css"
    settheme("dark")
  }
  console.log(theme);
  
  return (
    <Themecontextprovider value={{theme,lighttheme,darktheme}}>

      <Navbar/>
      <Topsection/>
    </Themecontextprovider>
    
  )
}

export default App
