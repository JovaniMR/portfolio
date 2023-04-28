import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PrincipalComponent,
    CurriculumComponent,
    CoursesComponent,
  ],
  imports: [
    CommonModule, 
    PagesRoutingModule,
    RouterModule
  ],
})
export class PagesModule {}
