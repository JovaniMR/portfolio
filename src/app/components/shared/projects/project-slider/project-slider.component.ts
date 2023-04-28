import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-slider',
  templateUrl: './project-slider.component.html',
  styleUrls: ['./project-slider.component.css'],
})
export class ProjectSliderComponent implements OnInit {
  @Input() slider;
  images: Array<string>;
  constructor() {}

  ngOnInit(): void {
    this.images = this.slider.images.map((image) => {
      return `${this.slider.file}${image}`;
    });
  }
}
