import React, { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => {
            setData(res.rates);
            console.log(res.rates);
        })
        .catch(error => {
            console.error('Error fetching currency data', error);
        })
    }, [currency])

    return data;
}

export default useCurrencyInfo


/* 
This is an custom hook created to fetch the currency api.
1. we are using useEffect hook to control the rerender of the component while fetching the data.
2. .then((res) => {
            setData(res.rates);
            console.log(res.rates);
        })
    this portion here set the data of currency into the component.
3. in the useffect hook the dependancy is our currency because whenever the currency will be changed the given component will be        rendered again.
*/