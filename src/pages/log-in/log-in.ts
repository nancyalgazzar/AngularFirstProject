import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [FormsModule,RouterLink],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css',
})
export class LogIn {
  LogedIn(form: NgForm) {
    if (form.value?.['rememberMe']) {
      localStorage.setItem('email', form.value?.['email']);
    }
  }
}
