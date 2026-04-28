import { Component, Input } from '@angular/core';
import { Task, Priority, Category, State } from '../../Model/TaskModel';

@Component({
  templateUrl: './TaskCard.html',
  styleUrl: './TaskCard.css',
  selector: 'app-taskcard',
})
export class TaskCard {
  @Input() task: Task = new Task();
  prioritycheck(): string {
    switch (Number(this.task.priority)) {
      case Priority.High:
        return 'bg-danger bg-opacity-25';
      case Priority.Medium:
        return 'bg-warning bg-opacity-25';
      case Priority.Low:
        return 'bg-success bg-opacity-25';
      default:
        return 'bg-light';
    }
  }
}
