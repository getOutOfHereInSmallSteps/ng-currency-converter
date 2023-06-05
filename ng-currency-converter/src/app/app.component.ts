import { Component } from '@angular/core';

// import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Currency Calculator';

  currencies = ['usd', 'eur', 'uah'];

  rates = {
    usd: 0.5,
    eur: 0.2,
    uah: 1,
  };

  input1 = '';
  input2 = '';

  logger() {
    console.log(this.input1);
    console.log(this.input2);
  }

  convertCurrency() {
    const baseRate = this.rates;
  }
}
