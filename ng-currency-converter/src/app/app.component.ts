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

  currencies: string[] = ['usd', 'eur', 'gbp'];
  exchangeRates: ExchangeRate = {
    usd: 1,
    eur: 0.9,
    gbp: 0.8,
  };

  convert() {
    const baseRate = this.exchangeRates[this.baseCurrency];
    const targetRate = this.exchangeRates[this.targetCurrency];
    this.targetAmount = (this.baseAmount / baseRate) * targetRate;
  }

  reverseConvert() {
    const baseRate = this.exchangeRates[this.baseCurrency];
    const targetRate = this.exchangeRates[this.targetCurrency];
    this.baseAmount = (this.targetAmount / targetRate) * baseRate;
  }
}
