import React, { useState, useEffect } from 'react';
import axios from "axios";
import Form from "./App/Form";
import Clock from "./App/Clock";
import Result from "./App/Result";

function App() {
  const [result, setResult] = useState();
  const [currencies, setCurrencies] = useState();

  const handleError = error => {
    console.error(error);
  }

  useEffect(() => {
    // setTimeout for dev to be able to see loading message  
    setTimeout(() => {
      axios.get("https://api.exchangeratesapi.io/latest?base=PLN")
        .then(response => {
          setCurrencies(response.data);
        })
      .catch(error => {
        handleError(error);
      });
    }, 1000)
  }, []);

  const calculateResult = (amount, currency) => {
    const rate = currencies.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  }



  return (
    <div className="App">
      <Clock />
      <Form
        data={currencies}
        result={result}
        calculateResult={calculateResult}
      />
      <Result result={result} />
    </div>
  );
}

export default App;
