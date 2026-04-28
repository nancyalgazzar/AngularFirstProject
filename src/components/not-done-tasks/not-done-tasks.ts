import { Component, Input } from '@angular/core';
import { Task } from '../../Model/TaskModel';
import { TaskCard } from '../TaskCard/TaskCard';
import { ErrorMsg } from '../../Model/ErrorModel';

@Component({
  selector: 'app-not-done-tasks',
  imports: [TaskCard],
  templateUrl: './not-done-tasks.html',
  styleUrl: './not-done-tasks.css',
})
export class NotDoneTasks {
  nocardsexist: ErrorMsg = {
    msg: 'All Tasks are Done 👍👍',
    state: true,
  };
  @Input() tasks: Task[] = [];
  noCards(): void {
    this.nocardsexist.state = false;
  }
}
