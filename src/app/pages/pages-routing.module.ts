import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { NotesComponent } from './notes/notes.component';
import { PinturilloComponent } from './pinturillo/pinturillo.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProyectsComponent } from './proyects/proyects.component';

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
    path: 'portafolio',
    component: ProyectsComponent,
  },
  {
    path: 'portafolio/chat',
    component: ChatComponent
  },
  {
    path: 'portafolio/app_notes',
    component: NotesComponent
  },
  {
    path: 'portafolio/ecommerce',
    component: EcommerceComponent
  },
  {
    path: 'portafolio/pinturillo',
    component: PinturilloComponent
  },
  {
    path: "", redirectTo: "inicio", pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
