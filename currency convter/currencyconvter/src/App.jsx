import { useState } from 'react'
import Input from './components/Input'
import "./index.css"
import useCurrencyinfo from "./Hooks/Usecurrencyinfo.hook.js"
function App() {
  const [ConvertedAmount, setConvertedAmount] = useState(0)
  const [FromAmount,setFromAmount]=useState(0)
  const [ToAmount,setToAmount]=useState(0)
  const [FromCurrency,setFromCurrency]=useState('inr')
  const [ToCurrency,setToCurrency]=useState('usd')

  let info=useCurrencyinfo(FromCurrency)

  let option=Object.keys(info)
  return (
    <>
      <div className='flex flex-col'>

        <Input option={option} FromCurrency={FromCurrency} ToCurrency={ToCurrency} setFromCurrency={setFromCurrency} setToCurrency={setToCurrency} />

        <div className='w-full flex justify-center '>
          <button className='bg-blue-600 text-white font-semibold px-3 py-1 rounded-md'>Sawp</button>
        </div>

        <Input option={option} label='to' inputdesabeld="true" FromCurrency={FromCurrency} ToCurrency={ToCurrency} setFromCurrency={setFromCurrency} setToCurrency={setToCurrency}  />
        <div>
          
        </div>
      </div>
    </>
  )
}

export default App
