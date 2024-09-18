import { CurrencyService } from './../currency.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  rates: any;

  constructor(private CurrencyService: CurrencyService) {}

  ngOnInit(): void {
    this.CurrencyService.getRates().subscribe((data) => {
      this.rates = data.rates;
    });
  }
}
