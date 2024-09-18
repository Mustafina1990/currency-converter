import { Routes } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  { path: '', redirectTo: '/converter', pathMatch: 'full' },
  { path: 'converter', component: ConverterComponent },
  { path: 'header', component: HeaderComponent },
];
