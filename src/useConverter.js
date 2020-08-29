import { useState } from 'react';
import { useAxios } from "./useAxios";

export const useConverter = () => {
    const [result, setResult] = useState();
    const [data, setData] = useState();

    const handleError = error => {
        console.error(error);
    }

    const calculateResult = (amount, currency) => {
        const rate = data.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    useAxios("https://api.exchangeratesapi.io/latest?base=PLN", setData, handleError);

    return {
        result,
        calculateResult,
        data
    }
}