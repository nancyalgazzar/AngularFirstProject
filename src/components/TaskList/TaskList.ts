import { Component, inject, signal } from '@angular/core';
import { TasksService } from '../../app/services/Tasks/TaaksService';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  templateUrl: './TaskList.html',
  styleUrl: './TaskList.css',
  selector: 'app-tasklist',
  imports: [RouterOutlet, RouterLinkWithHref, NgClass],
})
export class TaskList {
  checked = signal<'all'|'done'|'pending'>('all')
  listType = 0;
  selectList(e: EventTarget | null) {
    if (!e) return;
    const btn = e as HTMLButtonElement;
    this.listType = Number(btn.id);
  }
  taskService = inject(TasksService);
  ngOnInit() {
    this.taskService.getAllTasks();
    this.checked.set('all')
  }
}
