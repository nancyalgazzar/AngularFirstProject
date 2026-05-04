import { Component, inject } from '@angular/core';
import { NotificationService } from '../../app/services/Notification/notification-service';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-toast',
  imports: [NgClass],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class Toast {

  notification = inject(NotificationService)

}
