import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { changeOgj, Task } from '../../Model/TaskModel';
import { ErrorMsg } from '../../Model/ErrorModel';
import { TaskCard } from '../TaskCard/TaskCard';
import { TasksService } from '../../app/services/Tasks/TaaksService';

@Component({
  selector: 'app-allTasks',
  imports: [TaskCard],
  templateUrl: './allTasks.html',
  styleUrl: './allTasks.css',
})
export class AllTasks {
  taskService = inject(TasksService);
  ngOnInit(){
    console.log(this.taskService.tasksList());
  }
}
