import { Component, inject } from '@angular/core';
import { TasksService } from '../../app/services/Tasks/TaaksService';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  templateUrl: './TaskList.html',
  styleUrl: './TaskList.css',
  selector: 'app-tasklist',
  imports: [RouterOutlet, RouterLinkWithHref],
})
export class TaskList {
  listType = 0;
  selectList(e: EventTarget | null) {
    if (!e) return;
    const btn = e as HTMLButtonElement;
    this.listType = Number(btn.id);
  }
  taskService = inject(TasksService);
  ngOnInit() {
    this.taskService.getAllTasks();
  }
}
