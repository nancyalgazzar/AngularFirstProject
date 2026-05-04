import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Authentication } from '../../app/services/authentication/authentication';
import { NotificationService } from '../../app/services/Notification/notification-service';

function MatchPass(form: AbstractControl): null | ValidationErrors {
  let password = form.value['password'];
  let confirm = form.value['confirmPassword'];
  if (password !== confirm) return { matched: true };
  return null;
}
function includeSpace(control: AbstractControl): null | ValidationErrors {
  return control.value.includes(' ') ? { spaced: true } : null;
}
@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  form: FormGroup = new FormGroup(
    {
      username: new FormControl(' ', [Validators.required, Validators.minLength(6), includeSpace]),
      email: new FormControl(' ', [Validators.required, Validators.email]),
      password: new FormControl(' ', [
        Validators.required,
        Validators.pattern('^[A-Za-z\\d]{6,}$'),
      ]),
      confirmPassword: new FormControl(' ', [Validators.required]),
      rememberMe: new FormControl(' '),
    },
    [MatchPass],
  );
  router = inject(Router);
  auth = inject(Authentication);
  notify = inject(NotificationService);
  async submitForm(form: AbstractControl) {
    if (
      await this.auth.addUser(
        form.get('email')?.value,
        form.get('password')?.value,
        form.get('username')?.value,
      )
    ) {
      if (form.get('rememberMe')?.value) {
        localStorage.setItem('email', form.get('email')?.value);
        localStorage.setItem('password', form.get('password')?.value);
        localStorage.setItem('username', form.get('username')?.value);
      }
      this.router.navigate(['/main']);
    } else {
      this.notify.addmessage("Error during sign up, Please try again later",'error');
    }
  }
}
