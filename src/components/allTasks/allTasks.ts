import { Component, inject } from '@angular/core';
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
 
}
