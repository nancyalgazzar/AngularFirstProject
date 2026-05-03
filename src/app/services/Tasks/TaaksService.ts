import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASEURL } from '../../../Model/constants';
import { State, Task } from '../../../Model/TaskModel';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasksList: null | Task[] = null;
  http = inject(HttpClient);
  getAllTasks() {
    this.http.get<Task[]>(`${BASEURL}/tasks`).subscribe({
      next: (data) => {
        this.tasksList = data;
      },
      error(err) {
        console.log(err);
      },
    });
  }
  getTasks() {
    return this.tasksList;
  }
  getPendingTasks(): Task[] | null {
    if (this.tasksList) return this.tasksList.filter((p) => p.state === State.notDone);
    return null;
  }
  getDoneTasks() {
    if (this.tasksList) return this.tasksList?.filter((p) => p.state === State.Done);
    return null;
  }
  async addTask(task: Task) {
    try {
      let added = await firstValueFrom(this.http.post(`${BASEURL}/tasks`, task));
      console.log(added);
      return true;
    } catch (error) {
      console.log(error);
    }
    return false;
  }
  async updateTask(task: Task) {
    try {
      let temp = await firstValueFrom(this.http.put(`${BASEURL}/tasks/${task.id}`, task));
      console.log(temp);
      return true;
    } catch (error) {
      console.log(error);
    }
    return false;
  }
  async deleteTask(task: Task) {
    try {
      let temp = await firstValueFrom(this.http.delete(`${BASEURL}/tasks/${task.id}`));
      console.log(temp);
      return true;
    } catch (error) {
      console.log(error);
    }
    return false;
  }
  async markDone(task: Task) {
    console.log(task.id)
    console.log("url",`${BASEURL}/tasks/${task.id}`)
    try {
      let temp = await firstValueFrom(
        this.http.patch(`${BASEURL}/tasks/${task.id}`, { state: State.Done }),
      );
      console.log(temp);
      return true;
    } catch (error) {
      console.log(error);
    }
    return false;
  }
}
