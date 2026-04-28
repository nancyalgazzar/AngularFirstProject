import { Component, Input } from '@angular/core';
import { TaskCard } from '../TaskCard/TaskCard';
import { changeOgj, changeType, State, Task } from '../../Model/TaskModel';
import { DoneTasks } from '../done-tasks/done-tasks';
import { NotDoneTasks } from '../not-done-tasks/not-done-tasks';
import { ErrorMsg } from '../../Model/ErrorModel';

@Component({
  templateUrl: './TaskList.html',
  styleUrl: './TaskList.css',
  selector: 'app-tasklist',
  imports: [TaskCard, DoneTasks, NotDoneTasks],
})
export class TaskList {
  nocardsexist: ErrorMsg = {
    msg: 'NO Tasks YET',
    state: true,
  };
  @Input() taskList: Task[] = [];
  list = 0;
  selectList(e: EventTarget | null) {
    if (!e) return;
    const btn = e as HTMLButtonElement;
    this.list = Number(btn.id);
  }
  noCards(): void {
    this.nocardsexist.state = false;
  }
  change(obj: changeOgj) {
    console.log(obj);
    let index = -1;
    if (this.taskList.includes(obj.ts)) {
      index = this.taskList.indexOf(obj.ts);
    } else return;
    switch (obj.ch) {
      case changeType.delete: {
        console.log('del', changeType.delete);

        this.taskList.splice(index, 1);
        break;
      }
      case changeType.done: {
        console.log('indoen', changeType.done);
        this.taskList[index].state = State.Done;
        break;
      }
      default: {
        console.log('up');

        Object.assign(this.taskList[index], obj.ts);
        break;
      }
    }
    console.log(changeType.done)
    console.log(this.taskList);
  }
}
