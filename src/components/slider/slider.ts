import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider',
  imports: [FormsModule],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider {
  ImagesObj = [{
    url: "infi.jpg",
    state: "active"
  }, {
    url: "infinity.webp",
    state: "inactive"
  }, {
    url: "cover.jpg",
    state: "inactive"
  }]
  Images: string[] = ["infi.jpg", "cover.jpg", "infinity.webp"]
  index = 1
  timer: number = -1;
  setImage(event: Event) {
    console.log("press")
    const btn = event.target as HTMLButtonElement

    if (parseInt(btn.id) < this.Images.length) {
      this.index = parseInt(btn.id)
    }
  }
  next() {
    this.index += 1
    this.index %= this.Images.length

  }
  prev() {
    this.index -= 1
    this.index += this.Images.length
    this.index %= this.Images.length
    
  }
  slideshow() {
    if (this.timer === -1) {
      this.timer = setInterval(() => {
        this.next()
      }, 500);
    } else {
      clearInterval(this.timer)
      this.timer = -1
    }
  }
}
