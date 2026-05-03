import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task, Priority, Category, State, changeOgj, changeType } from '../../Model/TaskModel';
import { Form } from '../Form/Form';
import { TasksService } from '../../app/services/Tasks/TaaksService';

@Component({
  templateUrl: './TaskCard.html',
  styleUrl: './TaskCard.css',
  selector: 'app-taskcard',
  imports: [Form],
})
export class TaskCard {
  Category = Category;
  taskService = inject(TasksService);
  @Input() task: Task = new Task();
  delete() {
    this.taskService.deleteTask(this.task);
  }
  Done() {

    this.taskService.markDone(this.task);
  }
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
