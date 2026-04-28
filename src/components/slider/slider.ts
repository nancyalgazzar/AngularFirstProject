import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider',
  imports: [FormsModule],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider {

  Images: string[] = ["infi.jpg", "cover.jpg", "infinity.webp"]
  idx = 0
  timer: number = -1;
  setImage(event: Event) {
    const btn = event.target as HTMLButtonElement
    if (parseInt(btn.id) < this.Images.length) {
      this.idx = parseInt(btn.id)
    }
  }
  next() {

    this.idx += 1
    this.idx %= this.Images.length

  }
  prev() {
    this.idx -= 1
    this.idx += this.Images.length
    this.idx %= this.Images.length
  }
  ngOnInit() {
    this.timer = setInterval(() => {
      this.next()
    }, 1000);
  }
}
