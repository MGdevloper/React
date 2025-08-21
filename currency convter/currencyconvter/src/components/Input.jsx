import React from "react";
import "../index.css"
import { useId } from "react";
function Input(
    {
        label = "from",
        option = [],

        setFromAmount,
        setFromCurrency,
        FromCurrency,


        setToCurrency,
        ToCurrency,
        inputdesabeld = false
    }
) {


    return (
        <>
            <div className="flex min-w-[300px] flex-col gap-3 w-[400px] h-[100px] bg-white p-4 rounded-lg shadow-md m-2">
                <label className="text-gray-500" htmlFor={label}>
                    {label}
                    <p className="inline ml-2 text-[#333230] font-semibold">

                        {label.toLowerCase() == "from" ? FromCurrency : ToCurrency}
                    </p>
                </label>
                <div className="w-full  flex justify-between">

                    <input

                        disabled={inputdesabeld == "true" && true}

                        onChange={(e) => {
                            setFromAmount && setFromAmount(e.target.value);

                        }}
                        className="outline-none text-center customshadow  w-[70%] rounded-sm" id={label} type="number" />
                    <select onChange={(e) => {

                        if(label.toLowerCase() == "from")  setFromCurrency && setFromCurrency(e.target.value)


                        if(label.toLowerCase() == "to")    setToCurrency && setToCurrency(e.target.value)




                    }} className="customshadow w-[25%] text-center  rounded-sm" name="select" id="select">

                        {


                            option.map((opt) => (

                                <option key={opt} value={opt}>
                                    {opt}
                                </option>


                            ))
                        }



                    </select>
                </div>

            </div>
        </>
    )
}


export default Input