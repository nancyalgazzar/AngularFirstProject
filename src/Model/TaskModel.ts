import { count } from 'rxjs';
import { v4 as uuid } from 'uuid';

export enum Priority {
  NA,
  Low,
  Medium,
  High,
}
export enum Category {
  NA,
  Work,
  Personal,
  Study,
}
export enum State {
  Done,
  notDone,
}
export class Task {
  title: string = '';
  description: string = '';
  priority: Priority = Priority.NA;
  date: Date | string = new Date().toISOString().split('T')[0];
  category: Category = Category.NA;
  tags: string = '';
  state: State = State.notDone;
   id: string;
  constructor() {
    this.id = uuid();
  }
  get ID() {
    console.log("id",this.id);
    return this.id;
  }
  clearValues(): void {
    this.title = ' ';
    this.description = '';
    this.priority = Priority.NA;
    this.date = new Date().toLocaleDateString();
    this.category = Category.NA;
    this.tags = '';
    this.state = State.notDone;
    this.id = uuid();
  }
}
export interface changeOgj {
  ts: Task;
  ch: changeType;
}
export enum changeType
{
  done,delete,update
}