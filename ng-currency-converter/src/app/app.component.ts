import { Component } from '@angular/core';

interface ExchangeRate {
  [key: string]: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  exchangeRates: ExchangeRate | undefined;

  baseAmount: number = 0;
  targetAmount: number = 0;
  baseCurrency: string = '';
  targetCurrency: string = '';

  currencies: string[] = ['UAH', 'USD', 'EUR', 'GBP'];
  headerCurrencies = this.currencies.filter((el) => el !== 'UAH');

  baseCurrencies = this.currencies;
  targetCurrencies = this.currencies;

  convert() {
    this.baseCurrencies = this.currencies.filter(
      (el) => el !== this.targetCurrency
    );
    this.targetCurrencies = this.currencies.filter(
      (el) => el !== this.baseCurrency
    );

    if (!this.exchangeRates) return;
    const baseRate = this.exchangeRates[this.baseCurrency];
    const targetRate = this.exchangeRates[this.targetCurrency];
    this.targetAmount = (this.baseAmount / baseRate) * targetRate;
  }

  reverseConvert() {
    this.baseCurrencies = this.currencies.filter(
      (el) => el !== this.targetCurrency
    );
    this.targetCurrencies = this.currencies.filter(
      (el) => el !== this.baseCurrency
    );

    if (!this.exchangeRates) return;
    const baseRate = this.exchangeRates[this.baseCurrency];
    const targetRate = this.exchangeRates[this.targetCurrency];
    this.baseAmount = (this.targetAmount / targetRate) * baseRate;
  }

  ngOnInit() {
    (async () => {
      const currenciesData = await fetch(
        'https://api.exchangerate-api.com/v4/latest/UAH'
      );
      const currenciesDataJson = await currenciesData.json();
      this.exchangeRates = currenciesDataJson.rates;
    })();
  }
}
