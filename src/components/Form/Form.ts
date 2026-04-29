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
  Category = Category;
  @Input() update: boolean = false;
  @Output('task') taskEmitter = new EventEmitter<Task>();
  @Output() updateTask = new EventEmitter<Task>();

  task: Task = new Task();

  register() {
  
    if (!this.update) {
      this.taskEmitter.emit(this.task);
    } else {
      this.updateTask.emit(this.task);
    }
    this.task = new Task()
  }
  @Input() tasksend: Task = new Task();
  ngOnChanges(changes: SimpleChanges): void {
    
    if (changes['tasksend'].currentValue) {
      Object.assign(this.task, this.tasksend);
    }
  }
}
