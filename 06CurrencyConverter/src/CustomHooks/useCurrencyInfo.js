import { useEffect, useState } from "react";

const [data,setData] = useState({})
function useCurrencyInfo(currency){
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response)=> response.json())
        .then((res)=> setData(res[currency]))
        console.log(data);
        },[currency])
    console.log(data);
    
    return data

}
export default useCurrencyInfo;