import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.css']
})
export class ProjectDescriptionComponent implements OnInit {

  @Input() projectDescription: string;  
  constructor() { }

  ngOnInit(): void {
  }

}
