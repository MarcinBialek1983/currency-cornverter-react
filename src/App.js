import { useState } from "react";
import { currencies } from "./currencies";
import { FildsetExchange } from "./FildsetExchange";
import { FildsetCurrency } from "./FildsetCurrency";
import "./App.css"




function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: +amount / rate,
      currency,
    })
  }

  return (

    <div className="app">
      <FildsetCurrency
        title={"Aktualne kursy walut w PLN"} />
      <FildsetExchange
        title={"Kantor wyminay walut"}
        calculateResult={calculateResult}
        result={result} />
    </div>


  );
}

export default App;
