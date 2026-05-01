import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Task, Priority, Category } from '../../Model/TaskModel';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors} from '@angular/forms';
import { ErrorMsg } from '../../Model/ErrorModel';

// function ValidateDuedate(control: AbstractControl):null| ValidationErrors {
//   if(control.value< new Date()){
//     return {dateError:true}
//   }
//   return null;
// }
@Component({
  templateUrl: './Form.html',
  styleUrl: './Form.css',
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
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
  // form = new FormGroup({
  //   title: new FormControl(''),
  //   description: new FormControl(''),
  //   priority: new FormControl(''),
  //   category: new FormControl(''),
  //   dueDate: new FormControl<Date>(new Date(), [ValidateDuedate]),
  //   tags: new FormControl(''),
  // });
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
