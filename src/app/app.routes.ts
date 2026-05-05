import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { LogIn } from '../pages/log-in/log-in';
import { SignUp } from '../pages/sign-up/sign-up';
import { NotFound } from '../pages/not-found/not-found';
import { homeGuard } from './Guards/home-guard';
import { Slider } from '../components/slider/slider';
import { TaskList } from '../components/TaskList/TaskList';
import { NotDoneTasks } from '../components/not-done-tasks/not-done-tasks';
import { DoneTasks } from '../components/done-tasks/done-tasks';
import { AllTasks } from '../components/allTasks/allTasks';
import { AddTask } from '../components/add-task/add-task';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LogIn,
  },
  {
    path: 'signup',
    component: SignUp,
  },
  {
    path: 'main',
    component: Home,
    canActivate: [homeGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: Slider,
      },
      {
        path: 'add-task',
        component: AddTask,
      },
      {
        path: 'tasks',
        component: TaskList,
        children: [
          {
            path: '',
            redirectTo: 'tasks',
            pathMatch: 'full',
          },
          {
            path: 'tasks',
            component: AllTasks,
          },
          {
            path: 'pending',
            component: NotDoneTasks,
          },
          {
            path: 'done',
            component: DoneTasks,
          },
        ],
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
