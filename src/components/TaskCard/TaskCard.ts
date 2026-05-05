import { Component, inject, Input } from '@angular/core';
import { Task, Priority, Category } from '../../Model/TaskModel';
import { Form } from '../Form/Form';
import { TasksService } from '../../app/services/Tasks/TaaksService';
import { NgClass } from '@angular/common';

@Component({
  templateUrl: './TaskCard.html',
  styleUrl: './TaskCard.css',
  selector: 'app-taskcard',
  imports: [Form, NgClass],
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
