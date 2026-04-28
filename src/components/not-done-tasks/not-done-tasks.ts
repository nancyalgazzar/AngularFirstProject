import { Component, EventEmitter, Input, Output } from '@angular/core';
import { changeOgj, Task } from '../../Model/TaskModel';
import { TaskCard } from '../TaskCard/TaskCard';
import { ErrorMsg } from '../../Model/ErrorModel';

@Component({
  selector: 'app-not-done-tasks',
  imports: [TaskCard],
  templateUrl: './not-done-tasks.html',
  styleUrl: './not-done-tasks.css',
})
export class NotDoneTasks {
  @Output() taskEmitter = new EventEmitter<changeOgj>();
  nocardsexist: ErrorMsg = {
    msg: 'All Tasks are Done 👍👍',
    state: true,
  };
  @Input() tasks: Task[] = [];
  noCards(): void {
    this.nocardsexist.state = false;
  }
  change(obj: changeOgj) {
    this.taskEmitter.emit(obj);
  }
}
