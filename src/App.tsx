import React from 'react';
import './App.css';
import {currencyExchange} from './bll/dataLogic';
import {CurrencyExContainer} from "./components/CurrencyExchange/CurrencyExContainer";

function App() {
  return (
    <div className="App">
      <CurrencyExContainer store={currencyExchange}/>
    </div>
  );
}

export default App;
