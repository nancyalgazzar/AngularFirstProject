import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './Footer.html',
  styleUrl: './Footer.css',
  selector: 'app-footer',
})
export class Footer {
  idioms = [
    'Roll up your sleeves',
    'Put your nose to the grindstone',
    'Cross it off the list',
    'Keep your eye on the prize',
    'Small steps, big wins',
    'One task at a time',
    'Progress, not perfection',
    'Stay productive 🚀',
  ];
  index = signal<number>(0);
  ngOnInit() {
    setInterval(() => {
      this.index.update((val) => (val + 1) % this.idioms.length);
    },3000);
  }
}
