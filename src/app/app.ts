import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from "../components/toast/toast";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, Toast],
})
export class App {}
