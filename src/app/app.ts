import { Component } from '@angular/core';
import { Header } from '../components/Header/Header';
import { Form } from '../components/Form/Form';
import { TaskList } from '../components/TaskList/TaskList';
import { Footer } from '../components/Footer/Footer';
import { Task } from '../Model/TaskModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, Form, TaskList, Footer],
})
export class App {
  tasks: Task[] = [];
  getNewTask(task: Task) {
    this.tasks.push(task);
    console.log(this.tasks);
  }
}
