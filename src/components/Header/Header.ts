import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  templateUrl: './Header.html',
  styleUrl: './Header.css',
  selector: 'app-header',
  imports: [RouterLink, NgClass],
})
export class Header {
  btnclicked=signal<'home' | 'add' | 'task'>('home')
  ngOnInit() {
    this.btnclicked.set('home')
  }
}
