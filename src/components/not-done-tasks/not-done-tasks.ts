import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { changeOgj, Task } from '../../Model/TaskModel';
import { TaskCard } from '../TaskCard/TaskCard';
import { ErrorMsg } from '../../Model/ErrorModel';
import { TasksService } from '../../app/services/Tasks/TaaksService';

@Component({
  selector: 'app-not-done-tasks',
  imports: [TaskCard],
  templateUrl: './not-done-tasks.html',
  styleUrl: './not-done-tasks.css',
})
export class NotDoneTasks {
  taskService = inject(TasksService)
 
}
