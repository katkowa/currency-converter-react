import React from 'react';
import Form from "./App/Form";
import Clock from "./App/Clock";
import Result from "./App/Result";
import Info from "./App/Info";
import { useConverter } from './useConverter';

function App() {
  const { result, calculateResult, data, error } = useConverter();

  return (
    <div className="App">
      <Clock />
      <Form
        data={data}
        error={error}
        calculateResult={calculateResult}
      />
      <Info data={data} />
      <Result result={result} />
    </div>
  );
}

export default App;
