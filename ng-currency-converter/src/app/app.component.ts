import { Component } from '@angular/core';

// import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Currency Calculator';

  currencies = ['currency1', 'currency2'];

  logger(val: any) {
    console.log(val);
    console.log(typeof val);
  }
}
