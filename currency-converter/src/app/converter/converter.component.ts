import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './../currency.service';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css',
})
export class ConverterComponent implements OnInit {
  rates: any;
  amount1: number = 1;
  amount2: number = 0;
  currency1: string = 'UAH';
  currency2: string = 'USD';

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getRates().subscribe((data) => {
      this.rates = data.rates;
      this.convert();
    });
  }

  convert() {
    if (this.currency1 === 'UAH') {
      this.amount2 =
        (this.amount1 / this.rates[this.currency1]) *
        this.rates[this.currency2];
    } else if (this.currency2 === 'UAH') {
      this.amount2 = this.amount1 / this.rates[this.currency1];
    } else {
      this.amount2 =
        this.amount1 *
        (this.rates[this.currency2] / this.rates[this.currency1]);
    }
  }

  onAmount1Change() {
    this.convert();
  }

  onCurrency1Change() {
    this.convert();
  }

  onAmount2Change() {
    this.amount1 =
      this.amount2 / this.rates[this.currency2] / this.rates[this.currency1];
    this.convert();
  }

  onCurrency2Change() {
    this.convert();
  }
}
