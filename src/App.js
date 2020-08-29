import React, { useState } from 'react';
import Form from "./App/Form";
import Clock from "./App/Clock";
import Result from "./App/Result";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies
      .find(({ id }) => id === currency)
      .rate;
    console.log(rate);

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }



  return (
    <div className="App">
      <Clock />
      <Form
        result={result}
        calculateResult={calculateResult}
      />
      <Result result={result} />
    </div>
  );
}

export default App;
