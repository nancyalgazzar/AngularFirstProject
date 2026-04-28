import { Component, Input } from '@angular/core';
import { TaskCard } from '../TaskCard/TaskCard';
import { Task } from '../../Model/TaskModel';
import { DoneTasks } from "../done-tasks/done-tasks";
import { NotDoneTasks } from "../not-done-tasks/not-done-tasks";
import { ErrorMsg } from '../../Model/ErrorModel';

@Component({
  templateUrl: './TaskList.html',
  styleUrl: './TaskList.css',
  selector: 'app-tasklist',
  imports: [TaskCard, DoneTasks, NotDoneTasks],
})
export class TaskList {
   nocardsexist: ErrorMsg = {
      msg : 'NO Tasks YET',
      state : true,
    };
  @Input() taskList: Task[] = [];
  list = 0;
  selectList(e: EventTarget | null) {
    if(!e)
      return;
    const btn = e as HTMLButtonElement;
    this.list = Number(btn.id);
  }
   noCards ():void {
   this.nocardsexist.state=false
  }
}
