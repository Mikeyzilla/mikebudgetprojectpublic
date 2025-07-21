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
        pathMatch: 'full'
    },
    {
        path: 'makeBudget',
        component: CreateBudget
    },
    {
        path: 'aboutUs',
        component: AboutUs
    },
    {
        path: 'sendBudget',
        component: ExportBudget
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'loginUser',
        component: Login
    },
    {
        path: 'signUpUser',
        component: Signup
    },
    {
        path: 'viewUserBudgets',
        component: ViewBudget
    }
];
