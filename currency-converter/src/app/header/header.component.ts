import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  exchangeRates: { [key: string]: number } = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchExchangeRates();
  }

  fetchExchangeRates(): void {
    const apiKey = 'fca_live_Hanq18H87GsTqtthJOY0tIS8Y2AWTaxe3oXQXTiS';
    const apiUrl = `https://api.freecurrencyapi.com/v1/latest?base_currency=USD&apikey=${apiKey}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.exchangeRates = data.rates;
    });
  }
}
