import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// import { HeaderComponent } from './header/header.component';

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

  currencies: string[] = ['UAH', 'USD', 'EUR'];
  exchangeRates: ExchangeRate | undefined;

  convert() {
    console.log(this.exchangeRates);

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
