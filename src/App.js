import React from 'react';
import Form from "./App/Form";
import Clock from "./App/Clock";
import Result from "./App/Result";
import { useConverter } from './useConverter';

function App() {
  const { result, calculateResult, data } = useConverter();

  return (
    <div className="App">
      <Clock />
      <Form
        data={data}
        result={result}
        calculateResult={calculateResult}
      />
      <Result result={result} />
    </div>
  );
}

export default App;
