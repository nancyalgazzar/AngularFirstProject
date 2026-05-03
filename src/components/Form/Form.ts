import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { Task, Priority, Category } from '../../Model/TaskModel';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { ErrorMsg } from '../../Model/ErrorModel';
import { TasksService } from '../../app/services/Tasks/TaaksService';

@Component({
  templateUrl: './Form.html',
  styleUrl: './Form.css',
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
})
export class Form {
  taskservice = inject(TasksService);
  errorMsg: ErrorMsg = {
    msg: 'cccc',
    state: false,
  };
  Priority = Priority;
  Category = Category;
  @Input() update: boolean = false;
  @Input() tasksend: Task = new Task();
  @Output() updateTask = new EventEmitter();
  task: Task = new Task();

  validInputs(): boolean {
    for (let input in this.task) {
      let temp = input as keyof typeof this.task;
      if (!this.task[temp]) {
        this.errorMsg.msg = 'All fields should be filled ';
        console.log(this.errorMsg.msg);
        this.errorMsg.state = true;
        return false;
      }
    }
    this.errorMsg.state = false;
    return true;
  }
  register() {
    if (!this.update) {
      if (this.validInputs()) {
        this.taskservice.addTask(this.task);
      }
    } else {
      this.taskservice.updateTask(this.task);
      this.updateTask.emit('');
    }
    this.task = new Task();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tasksend'].currentValue) {
      Object.assign(this.task, this.tasksend);
    }
  }
}
