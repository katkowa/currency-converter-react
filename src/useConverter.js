import { useState } from 'react';
import { useAxios } from "./useAxios";

export const useConverter = () => {
    const [result, setResult] = useState();
    const [currencies, setCurrencies] = useState();

    const handleError = error => {
        console.error(error);
    }

    const calculateResult = (amount, currency) => {
        const rate = currencies.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    useAxios("https://api.exchangeratesapi.io/latest?base=PLN", setCurrencies, handleError);

    return {
        result,
        calculateResult,
        currencies
    }
}