import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { LoginPage } from './login/login.page';
import { DashboardPage } from './dashboard/dashboard.page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'dashboard', component: DashboardPage },
];

export const appRouterProviders = [provideRouter(routes)];
