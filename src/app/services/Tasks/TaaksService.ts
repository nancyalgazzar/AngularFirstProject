import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { BASEURL } from '../../../Model/constants';
import { State, Task } from '../../../Model/TaskModel';
import { catchError, EMPTY, firstValueFrom } from 'rxjs';
import { NotificationService } from '../Notification/notification-service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private notify = inject(NotificationService);
  tasksList = signal<null | Task[]>(null);
  http = inject(HttpClient);
  hastasks = computed(() => (this.tasksList()?.length ?? 0) > 0);
  getAllTasks() {
    try {
      this.http
        .get<Task[]>(`${BASEURL}/tasks`)
        .pipe(
          catchError(() => {
            this.notify.addmessage('Failed to load the tasks', 'error');
            return EMPTY;
          }),
        )
        .subscribe({
          next: (data) => {
            this.tasksList.set(data);
          },
        });
    } catch {}
  }
  getTasks() {
    return this.tasksList;
  }
  getPendingTasks = computed(() => {
    return this.tasksList()?.filter((p) => p.state === State.notDone) ?? null;
  });
  getDoneTasks = computed(() => {
    return this.tasksList()?.filter((p) => p.state === State.Done) ?? null;
  });
  async addTask(task: Task) {
    try {
      let added = await firstValueFrom(this.http.post(`${BASEURL}/tasks`, task));
      this.notify.addmessage('Task added sucessfully', 'success');
      this.getAllTasks();
      return true;
    } catch (error) {
      this.notify.addmessage('Failed to add the task  ', 'error');
    }
    return false;
  }
  async updateTask(task: Task) {
    try {
      let temp = await firstValueFrom(this.http.put(`${BASEURL}/tasks/${task.id}`, task));
      this.notify.addmessage('Task Updated sucessfully', 'success');
      this.getAllTasks();

      return true;
    } catch (error) {
      this.notify.addmessage('Failed to update the task  ', 'error');
    }
    return false;
  }
  async deleteTask(task: Task) {
    try {
      let temp = await firstValueFrom(this.http.delete(`${BASEURL}/tasks/${task.id}`));
      this.notify.addmessage('Task deleted sucessfully', 'success');
      this.getAllTasks();

      return true;
    } catch (error) {
      this.notify.addmessage('Failed to delete the task  ', 'error');
    }
    return false;
  }
  async markDone(task: Task) {
    console.log(task.id);
    console.log('url', `${BASEURL}/tasks/${task.id}`);
    try {
      let temp = await firstValueFrom(
        this.http.patch(`${BASEURL}/tasks/${task.id}`, { state: State.Done }),
      );
      this.notify.addmessage('Task is done', 'info');
      this.getAllTasks();

      return true;
    } catch (error) {
      this.notify.addmessage('Failed to make the task as done', 'error');
    }
    return false;
  }
}
