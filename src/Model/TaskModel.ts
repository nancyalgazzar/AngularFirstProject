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
  date: Date | string = new Date().toLocaleDateString();
  category: Category = Category.NA;
  tags: string = '';
  state: State = State.notDone;
  private id: string;
  constructor() {
    this.id = uuid();
  }
  get ID() {
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
