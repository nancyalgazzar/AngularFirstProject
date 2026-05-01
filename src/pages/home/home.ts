import { Component } from '@angular/core';
import { Header } from '../../components/Header/Header';
import { Form } from '../../components/Form/Form';
import { TaskList } from '../../components/TaskList/TaskList';
import { Footer } from '../../components/Footer/Footer';
import { Task } from '../../Model/TaskModel';
@Component({
  selector: 'app-home',
  imports: [Header, Form, TaskList, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  taskobj!: Task;
  getNewTask(task: Task) {
    this.taskobj = task;
  }
}
