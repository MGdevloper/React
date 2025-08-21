import { useEffect, useState } from "react";


const useCurrencyinfo = (currency) => {
    let [data, setdata] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.8.21/v1/currencies/${currency}.json`)
            .then((res) => {
                return res.json()
            }).
            then((res) => {
                setdata(res[currency])
            }
            )

        // return data
    }, [currency])

    return data
}

export default useCurrencyinfo
