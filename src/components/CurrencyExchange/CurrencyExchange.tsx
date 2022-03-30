import React from 'react';
import styled from "styled-components";

type CurrencyExchangePropsType = {
  currenciesName: string[];
  currentCurrency: string;
  currencyRate: number;
  isBuying: boolean;
  amountOfBYN: string;
  amountOfCurrency: string;
  changeCurrencyField: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeAction: (e: React.MouseEvent<HTMLSpanElement>) => void;
  changeCurrentCurrency: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const Currency = styled.div`
  margin: 100px 0 0 0;
  padding: 0 15px;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: rgba(249, 247, 246, 0.9);
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  
  h2 {
    font-family: Comic Sans MS, Comic Sans, cursive;
    text-align: center;
  }
`;
const CeButton = styled.button`
  width: 40%;
  padding: 10px;
  text-align: center;
  color: cornflowerblue;
  border: 2px solid cornflowerblue;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    background-color: rebeccapurple;
  }
`;

export const CurrencyExchange: React.FC<CurrencyExchangePropsType> = (props) => {
  const {
    currenciesName,
    currentCurrency,
    currencyRate,
    isBuying,
    amountOfBYN,
    amountOfCurrency,
    changeCurrencyField,
    changeAction,
    changeCurrentCurrency,
  } = props;

  const viewCurrency = isBuying ? (
    <>
      <label>
        You give the next amount of BYN:
        <input value={amountOfBYN} data-currency="byn" onChange={changeCurrencyField}/>
      </label>
      <label>
        You get the next amount of {currentCurrency}:
        <input value={amountOfCurrency} data-currency="currency" onChange={changeCurrencyField}/>
      </label>
    </>
  ) : (
    <>
      <label>
        You give the next amount of {currentCurrency}:
        <input value={amountOfCurrency} data-currency="currency" onChange={changeCurrencyField}/>
      </label>
      <label>
        You get the next amount of BYN:
        <input value={amountOfBYN} data-currency="byn" onChange={changeCurrencyField}/>
      </label>
    </>
  );

  return (
    <div className="currency">
      <h2>Currency converter</h2>
      <div className="currency-names">
        <p>Current currency:</p>
        <ul>
          {currenciesName.map((currency: string, index: number) => {
            return (
              <li
                key={`${index}-${currency}`}
                className={`currencies ${currentCurrency === currency ? 'activeCurrency' : null}`}
                onClick={changeCurrentCurrency}
                data-currency={currency}
              >
                {currency}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="currency-action">
        <span className={isBuying ? 'active' : ''} data-action="buy" onClick={changeAction}>
          Buy
        </span>
        <span className={isBuying ? '' : 'active'} data-action="sell" onClick={changeAction}>
          Sell
        </span>
      </div>
      <div className="fields">
        <p>Currency rate: {currencyRate}</p>
        {viewCurrency}
      </div>
    </div>
  );
};
