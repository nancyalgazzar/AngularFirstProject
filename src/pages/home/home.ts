import { Component } from '@angular/core';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Task } from '../../Model/TaskModel';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  taskobj!: Task;
  getNewTask(task: Task) {
    this.taskobj = task;
  }
}
