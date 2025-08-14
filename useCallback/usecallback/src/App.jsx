import { useCallback, useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  // function logMessage() {

  //   console.log("i am log message");  

  // }

  const logMessage = useCallback(() => {
    console.log("i am log message");

  }, [])



  useEffect(() => {
    logMessage();
  }, [logMessage])
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => {

        setCount(prev => prev + 1)
        
        
      }
      }
      >Increment</button>
    </>
  )
}

export default App
