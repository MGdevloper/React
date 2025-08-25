import React, { useEffect, useState } from "react";
import "../index.css"
import { useId } from "react";
function Input(
    {
        label = "from",
        option = [],

        setFromAmount,
        setFromCurrency,
        FromCurrency,
        FromAmount,


        setToCurrency,
        ToCurrency,
        ToAmount,
        inputdesabeld = false
    }
) {

    return (
        <div className="flex min-w-[300px] flex-col gap-3 w-full h-[100px] bg-gradient-to-r from-white/70 via-white/90 to-blue-100 p-4 rounded-xl shadow-lg m-2 border border-blue-200 backdrop-blur-md">
            <label className="text-blue-700 font-semibold" htmlFor={label}>
                {label}
                <p className="inline ml-2 text-blue-900 font-bold tracking-wide">
                    {label.toLowerCase() == "from" ? FromCurrency : ToCurrency}
                </p>
            </label>
            <div className="w-full  flex justify-between items-center gap-2">
                <input

                    value={label.toLocaleLowerCase() == "from" ? FromAmount : ToAmount}
                    min={0}
                    disabled={inputdesabeld == "true" && true}
                    onChange={(e) => {
                        setFromAmount && setFromAmount(e.target.value);
                    }}
                    className="outline-none  text-blue-900 bg-white/80 customshadow w-[70%] h-[30px] rounded-md px-3 py-2 border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-center"
                    id={label}
                    type="number"
                />
                <select
                    value={label.toLocaleLowerCase() == "from" ? FromCurrency : ToCurrency}
                    onChange={(e) => {
                        if (label.toLowerCase() == "from") setFromCurrency && setFromCurrency(e.target.value)
                        if (label.toLowerCase() == "to") setToCurrency && setToCurrency(e.target.value)
                        
                    }}
                    className="customshadow w-[25%] h-[30px] text-blue-900 bg-white/80 rounded-md  border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-center"
                    name="select"
                    id="select"
                >
                    {option.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}


export default Input