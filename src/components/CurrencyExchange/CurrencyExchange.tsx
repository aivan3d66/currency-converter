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
  font-family: FreeMono, monospace;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: rgba(249, 247, 246, 0.9);
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  
  h2 {
    color: rgb(77, 77, 77);
    text-align: center;
    letter-spacing: 2px;
  }
  
  ul {
    list-style: none;
    display: flex;
  }

  li {
    display: inline-block;
    margin-left: 10px;
    cursor: pointer;
  }
`;
const CurrencyNames = styled.div`
  display: flex;
  justify-content: space-between;
  
  p {
    padding: 7px 0;
  }
`;
const CurrencyAction = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CeButton = styled.button`
  width: 40%;
  padding: 10px;
  text-align: center;
  color: rgba(100, 149, 237, 100);
  border: 2px solid rgba(100, 149, 237, 100);
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    color: #ffffff;
    background-color: rgba(100, 149, 237, 0.5);
    border: 2px solid rgba(100, 149, 237, 0.5);
  }

  .active {
    color: white;
    background-color: cornflowerblue;
  }
`;
const Currencies = styled.li`
  padding: 5px 10px;
  color: cornflowerblue;
  border: 2px solid rgba(100, 149, 237, 100);
  transition: 0.3s;
`;
const Fields = styled.div`
  display: block;
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    outline: none;
    border: 2px solid transparent;
    transition: 0.3s;

    &:hover {
      border-color: rgba(100, 149, 237, 100);
    }
    
    &:active,
    &:focus {
      border: 2px solid transparent;
      border-bottom: 2px solid rgba(100, 149, 237, 100);
    }
  }
  
  span {
    margin-left: 10px;
    color: rgba(100, 149, 237, 100);
    border-bottom: 1px solid rgba(100, 149, 237, 100);
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
        You give the next amount of <b>BYN</b>:
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
        You get the next amount of <b>BYN</b>:
        <input value={amountOfBYN} data-currency="byn" onChange={changeCurrencyField}/>
      </label>
    </>
  );

  return (
    <Currency>
      <h2>Currency exchange</h2>
      <CurrencyNames>
        <p>Current currency:</p>
        <ul>
          {currenciesName.map((currency: string, index: number) => {
            return (
              <Currencies
                key={`${index}-${currency}`}
                style={{
                  color: currentCurrency === currency ? 'white' : 'cornflowerblue',
                  backgroundColor: currentCurrency === currency ? 'cornflowerblue' : 'white',
                }}
                onClick={changeCurrentCurrency}
                data-currency={currency}
              >
                {currency}
              </Currencies>
            );
          })}
        </ul>
      </CurrencyNames>
      <CurrencyAction>
        <CeButton style={{
          color: isBuying ? '#ffffff' : 'rgba(100, 149, 237, 100)',
          backgroundColor: isBuying ? 'rgba(100, 149, 237, 100)' : 'transparent'
        }} data-action="buy" onClick={changeAction}>
          Buy
        </CeButton>
        <CeButton style={{
          color: !isBuying ? '#ffffff' : 'rgba(100, 149, 237, 100)',
          backgroundColor: !isBuying ? 'rgba(100, 149, 237, 100)' : 'transparent'
        }} data-action="sell" onClick={changeAction}>
          Sell
        </CeButton>
      </CurrencyAction>
      <Fields>
        <p>Currency rate:
          <span>
            {currencyRate}
          </span>
        </p>
        {viewCurrency}
      </Fields>
    </Currency>
  );
};
