import { Component, Input } from '@angular/core';
import { Task } from '../../Model/TaskModel';
import { TaskCard } from '../TaskCard/TaskCard';
import { ErrorMsg } from '../../Model/ErrorModel';

@Component({
  selector: 'app-done-tasks',
  imports: [TaskCard],
  templateUrl: './done-tasks.html',
  styleUrl: './done-tasks.css',
})
export class DoneTasks {
  nocardsexist: ErrorMsg = {
    msg : 'NO Done Tasks YET',
    state : true,
  };
  @Input() tasks: Task[] = [];
   noCards ():void {
   this.nocardsexist.state=false
  }
}
