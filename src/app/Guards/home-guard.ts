import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const homeGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  if (localStorage.getItem('email')||sessionStorage.getItem('email')) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
