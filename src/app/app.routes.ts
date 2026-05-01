import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { LogIn } from '../pages/log-in/log-in';
import { SignUp } from '../pages/sign-up/sign-up';
import { NotFound } from '../pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LogIn,
  },
  {
    path: 'signup',
    component: SignUp,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: '**',
    component: NotFound,
  },
];
