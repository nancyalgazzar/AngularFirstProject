import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, Priority, Category, State, changeOgj, changeType } from '../../Model/TaskModel';
import { Form } from '../Form/Form';

@Component({
  templateUrl: './TaskCard.html',
  styleUrl: './TaskCard.css',
  selector: 'app-taskcard',
  imports: [Form],
})
export class TaskCard {
  @Input() task: Task = new Task();
  @Output() taskEmitter = new EventEmitter<changeOgj>();
  updated(t: Task) {
    this.taskEmitter.emit({
      ts: t,
      ch: changeType.update,
    });
    
  }
  changed(btn: HTMLButtonElement) {
    let c = changeType.update;
    if (Object.values(changeType).includes(btn.innerText.toLowerCase())) {
      c = changeType[btn.innerText.toLowerCase() as keyof typeof changeType];
    }

    let obj: changeOgj = {
      ts: this.task,
      ch: c,
    };
    this.taskEmitter.emit(obj);
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
