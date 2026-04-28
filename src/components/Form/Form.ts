import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Task, Priority, Category, State } from '../../Model/TaskModel';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './Form.html',
  styleUrl: './Form.css',
  selector: 'app-form',
  imports: [NgbModule, FormsModule],
})
export class Form {
  Priority = Priority;
  @Output('task') taskEmitter = new EventEmitter<Task>();

  task: Task = new Task();

  register() {
    let copy = Object.assign(new Task(), this.task);
    this.task.clearValues();
    this.taskEmitter.emit(copy);
  }
}
