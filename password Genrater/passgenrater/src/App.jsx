import { useState, useEffect, useCallback ,useRef} from 'react'
import "./index.css"

function App() {
  const [length, setLength] = useState(8);
  const [NumbersAllow, setNumbersAllow] = useState(false);
  const [CharactersAllow, setCharactersAllow] = useState(false);
  const [password, setpassword] = useState("")
  const passwordRef=useRef(null);
  const generatePassword = useCallback(() => {


    let str = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (NumbersAllow) str = str + "0123456789";
    if (CharactersAllow) str = str + "!@#$%^&*()_+";
    let pass = ""

    for (let i = 1; i <= length; i++) {

      let randomIndex = Math.floor((Math.random()) * str.length)
      pass = pass + str.charAt(randomIndex)

    }

    setpassword(pass)


  }, [length, NumbersAllow, CharactersAllow])

  useEffect(() => {
    generatePassword()

  }, [length, NumbersAllow, CharactersAllow])
  return (
    
    <div className="w-full flex items-center justify-center min-h-screen bg-gradient-to-br from-[#03071286] via-[#03071257] to-[#0307121d]">
      
      <div className="border-white border-2 w-full max-w-md p-6 bg-[#18181b] rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center tracking-wide">Password Generator</h1>
        <div className="flex gap-2 mb-4">
          <input
            value={password}
            type="text"
            className="flex-1 px-4 py-2 rounded-lg bg-[#23272f] text-white font-mono text-lg outline-none border border-gray-700 focus:border-blue-400 transition"
            placeholder="Your password..."
            readOnly
            ref={passwordRef}
          />
          <button onClick={(e)=>{
            window.navigator.clipboard.writeText(password)
            passwordRef.current.select()
          }}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow hover:scale-105 hover:from-blue-600 hover:to-blue-800 transition"
          >
            Copy
          </button>
        </div>

        <div className="mb-6">
          <label htmlFor="length" className="block text-white font-medium mb-2 text-center">
            Password Length
          </label>
          <div className="flex flex-col items-center">
            <span className="text-blue-400 font-bold mb-1 text-lg">{length}</span>
            <input
              id="length"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              min={8}
              max={50}
              type="range"
              className="w-full accent-blue-500 h-2 rounded-lg appearance-none bg-gray-700"
            />
            <div className="flex justify-between w-full text-xs text-gray-400 mt-1">
              <span>8</span>
              <span>50</span>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center gap-4 '>

          <div className='font-semibold text-white mb-4 text-center '>

            Numbers:
          </div>
          <div>

            <label htmlFor="numbers">
              <input onChange={(e) => {
                setNumbersAllow(prev => !prev)

              }
              } className='mb-[15px] w-5 h-5 accent-blue-500' type="checkbox" name="" id="" />
            </label>
          </div>
        </div>

        <div className='flex justify-center items-center gap-4 '>

          <div className='font-semibold text-white mb-4 text-center '>

            Charectars:
          </div>
          <div>

            <label htmlFor="numbers">
              <input onChange={(e) => {
                setCharactersAllow(prev => !prev)
              }} className='mb-[15px] w-5 h-5 accent-blue-500' type="checkbox" name="" id="" />
            </label>
          </div>
        </div>

        <div className='flex justify-center items-center gap-4 text-white font-semibold  p-3'>
          <div>length:
            <span className='text-blue-400 font-bold ml-1'>

              {length}
            </span>
          </div>
          <div>Numbers:
            <span className='text-blue-400 font-bold ml-1'>

              {NumbersAllow ? "yes" : "No"}
            </span>
          </div>
          <div>Charectars:
            <span className='text-blue-400 font-bold ml-1'>

              {CharactersAllow ? "yes" : "No"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
