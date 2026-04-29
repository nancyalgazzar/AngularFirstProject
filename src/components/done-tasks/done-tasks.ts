import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { changeOgj, Task } from '../../Model/TaskModel';
import { TaskCard } from '../TaskCard/TaskCard';
import { ErrorMsg } from '../../Model/ErrorModel';

@Component({
  selector: 'app-done-tasks',
  imports: [TaskCard],
  templateUrl: './done-tasks.html',
  styleUrl: './done-tasks.css',
})
export class DoneTasks {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tasks'].firstChange) {
      this.count = changes['tasks'].currentValue.length;
    }
  }

  @Output() taskEmitter = new EventEmitter<changeOgj>();
  nocardsexist: ErrorMsg = {
    msg: 'NO Done Tasks YET',
    state: true,
  };
  @Input() tasks: Task[] = [];
  count = this.tasks.length;
  noCards(): void {
    this.nocardsexist.state = false;
  }
  change(obj: changeOgj) {
    this.taskEmitter.emit(obj);
  }
}
