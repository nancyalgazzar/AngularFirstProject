import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  imports: [FormsModule],
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
