import React from 'react';
import Form from "./App/Form";
import Clock from "./App/Clock";
import Result from "./App/Result";
import { useConverter } from './useConverter';

function App() {
  const { result, calculateResult, currencies } = useConverter();

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
