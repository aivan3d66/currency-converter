import React from 'react';
import {currencyExchange, CurrencyType} from '../../bll/dataLogic';
import {CurrencyExchange} from './CurrencyExchange';
import {observer} from "mobx-react";

export const CurrencyExContainer: React.FC<any> = observer(({timer}) => {
  const {
    currencies,
    currentCurrency,
    amountOfCurrency,
    isBuying,
    amountOfBYN,
  } = timer

  let currencyRate: number = 0;
  const currenciesName = currencies.map((currency: CurrencyType) => {
    if (currency.currencyName === currentCurrency) {
      currencyRate = isBuying ? currency.buyRate : currency.sellRate;
    }
    return currency.currencyName;
  });

  const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (!isFinite(+value)) return;
    if (e.currentTarget.dataset.currency) {
      const trigger: string = e.currentTarget.dataset.currency;
      if (trigger === 'byn') {
        if (value === '') {
          currencyExchange.changeCurrencyField(value, value)
        } else {
          currencyExchange.changeCurrencyField(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
        }
      } else {
        if (value === '') {
          currencyExchange.changeCurrencyField(value, value);
        } else {
          currencyExchange.changeCurrencyField((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
        }
      }
    }
  };

  const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.dataset.action === 'buy' ? currencyExchange.changeAction(true) : currencyExchange.changeAction(false);
  };

  const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.dataset.currency && dispatch(ChangeCurrentCurrencyAC(e.currentTarget.dataset.currency));
  };

  return (
    <>
      <div>Component is here</div>
      <CurrencyExchange
        currenciesName={currenciesName}
        currentCurrency={currentCurrency}
        currencyRate={currencyRate}
        isBuying={isBuying}
        amountOfBYN={amountOfBYN}
        amountOfCurrency={amountOfCurrency}
        changeCurrencyField={changeCurrencyField}
        changeAction={changeAction}
        changeCurrentCurrency={changeCurrentCurrency}
      />
    </>
  );
};)
