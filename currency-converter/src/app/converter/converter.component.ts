import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CurrencyService } from './../currency.service';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  rates: any;
  amount1: number = 1;
  amount2: number = 0;
  currency1: string = 'UAH';
  currency2: string = 'USD';
  currencies: string[] = ['UAH', 'USD', 'EUR'];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getRates().subscribe((data) => {
      this.rates = data.rates;
      this.convertFromAmount1();
    });
  }

  convertFromAmount1(): void {
    if (this.rates) {
      const rate1 = this.rates[this.currency1];
      const rate2 = this.rates[this.currency2];
      this.amount2 = (this.amount1 * rate2) / rate1;
    }
  }

  convertFromAmount2(): void {
    if (this.rates) {
      const rate1 = this.rates[this.currency1];
      const rate2 = this.rates[this.currency2];
      this.amount1 = (this.amount2 * rate1) / rate2;
    }
  }

  onAmount1Change(): void {
    this.convertFromAmount1();
  }

  onCurrency1Change(): void {
    this.convertFromAmount1();
  }

  onAmount2Change(): void {
    this.convertFromAmount2();
  }

  onCurrency2Change(): void {
    this.convertFromAmount2();
  }
}
