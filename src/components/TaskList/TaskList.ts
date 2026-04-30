import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TaskCard } from '../TaskCard/TaskCard';
import { changeOgj, changeType, Priority, State, Task } from '../../Model/TaskModel';
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
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['task'].firstChange) {
      this.taskList.push(changes['task'].currentValue);
      this.count = this.taskList.length
      if ((changes['task'].currentValue as Task).state == State.Done) {
        this.doneList.push(changes['task'].currentValue);
      } else {
        this.notdoneList.push(changes['task'].currentValue);
      }
    }
  }
  doneList: Task[] = [];
  notdoneList: Task[] = [];
  nocardsexist: ErrorMsg = {
    msg: 'NO Tasks YET',
    state: true,
  };
  count = 0;
  taskList: Task[] = [];
  @Input() task!: Task;
  listType = 0;
  selectList(e: EventTarget | null) {
    if (!e) return;
    const btn = e as HTMLButtonElement;
    this.listType = Number(btn.id);
  }
  noCards(): void {
    this.nocardsexist.state = false;
  }
  change(obj: changeOgj) {
    let index = -1;
    index = this.taskList.indexOf(obj.ts);

    switch (obj.ch) {
      case changeType.delete: {
        if (index == -1) return;
        if (this.doneList.indexOf(obj.ts) != -1) {
          this.doneList = this.doneList.filter((p) => p.ID != obj.ts.ID);
        } else {
          this.notdoneList = this.notdoneList.filter((p) => p.ID != obj.ts.ID);
        }
        this.taskList.splice(index, 1);
        break;
      }
      case changeType.done: {
        if (index == -1) return;
        this.taskList[index].state = State.Done;
        this.notdoneList = this.notdoneList.filter((p) => p.ID != obj.ts.ID);
        this.doneList.push(obj.ts);

        break;
      }
      default: {
        console.log('up');
        console.log(this.taskList);
        this.taskList = this.taskList.map((p) => {
          if (p.ID == obj.ts.ID) return obj.ts;
          else return p;
        });
        console.log(this.taskList);

        this.doneList = this.doneList.map((p) => {
          if (p.ID == obj.ts.ID) return obj.ts;
          else return p;
        });

        this.notdoneList = this.notdoneList.map((p) => {
          if (p.ID == obj.ts.ID) return obj.ts;
          else return p;
        });

        break;
      }
    }
  }
}
