import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Authentication } from '../../app/services/authentication/authentication';

@Component({
  selector: 'app-log-in',
  imports: [FormsModule, RouterLink],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css',
})
export class LogIn {
   router = inject(Router);
  auth = inject(Authentication);
  LogedIn(form: NgForm) {
    if (form.value?.['rememberMe']) {
      localStorage.setItem('email', form.value?.['email']);
    }
    this.auth.IsAutherized(form.value?.['email'], form.value?.['password']).subscribe((user) => {
      if (user) {
        this.router.navigate(['/main']);
      } else {
        //error message
      }
    });
  }
}
