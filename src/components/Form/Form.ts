import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Task, Priority, Category, State } from '../../Model/TaskModel';
import { FormsModule } from '@angular/forms';
import { ErrorMsg } from '../../Model/ErrorModel';

@Component({
  templateUrl: './Form.html',
  styleUrl: './Form.css',
  selector: 'app-form',
  imports: [NgbModule, FormsModule],
})
export class Form {
  errorMsg: ErrorMsg = {
    msg: 'cccc',
    state: false,
  };
  Priority = Priority;
  Category = Category;
  @Input() update: boolean = false;
  @Output('task') taskEmitter = new EventEmitter<Task>();
  @Output() updateTask = new EventEmitter<Task>();

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
        this.taskEmitter.emit(this.task);
      }
    } else {
      this.updateTask.emit(this.task);
    }
    this.task = new Task();
  }
  @Input() tasksend: Task = new Task();
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tasksend'].currentValue) {
      Object.assign(this.task, this.tasksend);
    }
  }
}
