import {observable, computed, configure, action} from "mobx";
import {observer} from "mobx-react";

configure({enforceActions: "observed"});

export type CurrencyType = {
  currencyName: string;
  buyRate: number;
  sellRate: number;
};
export type CurrencyState = {
  currencies: Array<CurrencyType>;
  currentCurrency: string;
  isBuying: boolean;
  amountOfBYN: string;
  amountOfCurrency: string;
};

export const currencyExchange = observable({
  currencies: [
    {
      currencyName: 'USD',
      buyRate: 2.62,
      sellRate: 2.58,
    },
    {
      currencyName: 'EUR',
      buyRate: 3.1,
      sellRate: 3.06,
    },
    {
      currencyName: 'RUR',
      buyRate: 0.0345,
      sellRate: 0.0341,
    },
  ],
  currentCurrency: 'USD',
  isBuying: true,
  amountOfBYN: '',
  amountOfCurrency: '',

  changeCurrencyField(amountOfBYN: string, amountOfCurrency: string) {
    this.amountOfBYN = amountOfBYN;
    this.amountOfCurrency = amountOfCurrency
  },


}, {
  changeCurrencyField: action('changeCurrencyField'),
});
