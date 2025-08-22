import { useEffect, useState } from 'react'
import Input from './components/Input'
import "./index.css"
import useCurrencyinfo from "./Hooks/Usecurrencyinfo.hook.js"
function App() {
  
  const [FromAmount, setFromAmount] = useState(0)
  const [ToAmount, setToAmount] = useState(0)
  const [FromCurrency, setFromCurrency] = useState('inr')
  const [ToCurrency, setToCurrency] = useState('usd')

  let info = useCurrencyinfo(FromCurrency)

  let option = Object.keys(info)

  function calculate(ToCurrency) {
    let result=FromAmount* info[ToCurrency]
    
    setToAmount(result.toFixed(2))
  }


  function swap(){
    setFromAmount(ToAmount)
    setToAmount(FromAmount)
    setFromCurrency(ToCurrency)
    setToCurrency(FromCurrency)
  }
  return (

    <div className='min-w-[300px]  w-[400px] flex flex-col justify-center items-center h-[400px] mx-3'>

      <Input option={option} FromAmount={FromAmount} FromCurrency={FromCurrency} ToCurrency={ToCurrency} setFromCurrency={setFromCurrency} setToCurrency={setToCurrency}

        setFromAmount={setFromAmount}
      />

      <div className='w-full flex justify-center my-4'>
        <button
          onClick={
            swap
          }
          className='bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg'
        >
          Swap
        </button>
      </div>

      <Input
        option={option}
        label='to'
        inputdesabeld="true"
        FromCurrency={FromCurrency}
        ToCurrency={ToCurrency}
        setFromCurrency={setFromCurrency}
        setToCurrency={setToCurrency}
        ToAmount={ToAmount}
      />

      <div className='w-full flex justify-center my-4'>
        <button
          onClick={(e) => {
            calculate(ToCurrency)
          }}
          className='bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 font-semibold text-white min-w-[300px] w-[400px] h-[40px] rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:from-blue-400 hover:to-blue-600 hover:shadow-lg'
        >
          {FromCurrency} to {ToCurrency}
        </button>
      </div>
    </div>

  )
}

export default App
