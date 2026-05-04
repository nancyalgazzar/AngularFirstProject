import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { changeOgj, Task } from '../../Model/TaskModel';
import { TaskCard } from '../TaskCard/TaskCard';
import { ErrorMsg } from '../../Model/ErrorModel';
import { TasksService } from '../../app/services/Tasks/TaaksService';

@Component({
  selector: 'app-done-tasks',
  imports: [TaskCard],
  templateUrl: './done-tasks.html',
  styleUrl: './done-tasks.css',
})
export class DoneTasks {
  taskService = inject(TasksService);

 
}
