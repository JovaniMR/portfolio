import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectDescriptionComponent } from './projects/project-description/project-description.component';
import { ProjectInfoComponent } from './projects/project-info/project-info.component';
import { ProjectSliderComponent } from './projects/project-slider/project-slider.component';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from './projects/project-card/project-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ProjectDescriptionComponent,
    ProjectInfoComponent,
    ProjectSliderComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    ProjectDescriptionComponent,
    ProjectInfoComponent,
    ProjectSliderComponent,
    ProjectCardComponent
  ]
})
export class SharedModule { }
