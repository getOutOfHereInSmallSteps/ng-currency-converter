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
  baseAmount: number = 0;
  targetAmount: number = 0;
  baseCurrency: string = '';
  targetCurrency: string = '';

  currencies: string[] = ['UAH', 'USD', 'EUR', 'GBP'];
  exchangeRates: ExchangeRate | undefined;

  convert() {
    if (!this.exchangeRates) return;
    const baseRate = this.exchangeRates[this.baseCurrency];
    const targetRate = this.exchangeRates[this.targetCurrency];
    this.targetAmount = (this.baseAmount / baseRate) * targetRate;
  }

  reverseConvert() {
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
