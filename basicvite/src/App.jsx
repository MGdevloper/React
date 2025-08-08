import { useState } from 'react'

function App() {
  const [count, setCount] = useState(5)

  const add=()=>{
    setCount(prev=> prev + 1)
  }

  const subtract=()=>{
    setCount(prev=> prev - 1)
  }

  return (
    <>
    <input value={count} type="text" />
    <button onClick={add}>add</button>
    <button onClick={subtract}>subtract</button>


    </>
  )
}

export default App
