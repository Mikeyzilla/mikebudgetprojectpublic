import { Routes } from '@angular/router';
import { CreateBudget } from './features/create-budget/create-budget';
import { ExportBudget } from './features/export-budget/export-budget';
import { Home } from './features/home/home';
import { Login } from './features/login/login';
import { Signup } from './features/signup/signup';
import { ViewBudget } from './features/view-budget/view-budget';
import { AboutUs } from './features/about-us/about-us';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'makeBudget',
    loadComponent: () =>
      import('./features/create-budget/create-budget').then(m => m.CreateBudget),
  },
  {
    path: 'aboutUs',
    loadComponent: () =>
      import('./features/about-us/about-us').then(m => m.AboutUs),
  },
  {
    path: 'sendBudget',
    loadComponent: () =>
      import('./features/export-budget/export-budget').then(m => m.ExportBudget),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home').then(m => m.Home),
  },
  {
    path: 'loginUser',
    loadComponent: () =>
      import('./features/login/login').then(m => m.Login),
  },
  {
    path: 'signUpUser',
    loadComponent: () =>
      import('./features/signup/signup').then(m => m.Signup),
  },
  {
    path: 'viewUserBudgets',
    loadComponent: () =>
      import('./features/view-budget/view-budget').then(m => m.ViewBudget),
  },
];
