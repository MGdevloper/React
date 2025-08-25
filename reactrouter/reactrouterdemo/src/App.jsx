import { useState } from 'react'
import Navbar from './compponents/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to React Router Demo</h1>
      <Navbar/>
    </>
  )
}

export default App
