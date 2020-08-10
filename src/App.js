import React, { useState } from 'react';
import Form from "./App/Form";
import { currencies } from "./App/currencies";

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
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </div>
  );
}

export default App;
