import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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
  @Input() update: boolean = false;
  @Output('task') taskEmitter = new EventEmitter<Task>();
  @Output() updateTask = new EventEmitter<Task>();

  task: Task = new Task();

  register() {
    let copy = Object.assign(new Task(), this.task);
    this.task.clearValues();
    if (!this.update) {
      this.taskEmitter.emit(copy);
    } else {
      this.updateTask.emit(copy);
    }
  }
  @Input() tasksend: Task = new Task();
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log(this.tasksend)
    if (changes['tasksend'].currentValue) {
      Object.assign(this.task, this.tasksend);
    }
  }
}
