import { useState } from 'react';
import { useAxios } from "./useAxios";

export const useConverter = () => {
    const url = "https://api.exchangeratesapi.io/latest?base=PLN";
    const [result, setResult] = useState();
    const [data, setData] = useState();
    const [error, setError] = useState();

    const calculateResult = (amount, currency) => {
        const rate = data.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    useAxios(url, setData, error => setError(error.message));

    return {
        result,
        calculateResult,
        data,
        error,
    }
}