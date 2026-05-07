import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASEURL } from '../../../Model/constants';
import { firstValueFrom, map } from 'rxjs';
import { NotificationService } from '../Notification/notification-service';

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  static counter = 10;
  http = inject(HttpClient);
  notify = inject(NotificationService);
  IsAutherized(email: string, password: string) {
    return this.http.get<User[]>(`${BASEURL}/users?email=${email}`).pipe(
      map((users) => {
        if (users.length === 0) return false;
        return users[0].password === password;
      }),
    );
  }
  isFirstTimeEmail(email: string) {
    return this.http.get<User[]>(`${BASEURL}/users?email=${email}`).pipe(
      map((users) => {
        if (users.length === 0) return true;
        return false;
      }),
    );
  }
  async addUser(email: string, password: string, username: string): Promise<boolean> {
    const firsttime = await firstValueFrom(this.isFirstTimeEmail(email));

    if (!firsttime) {
      this.notify.addmessage('this Email is already used', 'error');
      return false;
    }

    try {
      await firstValueFrom(
        this.http.post(`${BASEURL}/users`, {
          id: Authentication.counter,
          email,
          password,
          username,
        }),
      );
      Authentication.counter++;
      this.notify.addmessage(`Welcome Mr/s ${username}`, 'success');

      return true;
    } catch {
      this.notify.addmessage('Error during sign up, Please try again later', 'error');
      return false;
    }
  }
}
