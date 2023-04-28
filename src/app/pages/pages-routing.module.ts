import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { PrincipalComponent } from './principal/principal.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: PrincipalComponent,
  },
  {
    path: 'cv',
    component: CurriculumComponent,
  },
  {
    path: 'cursos',
    component: CoursesComponent,
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
