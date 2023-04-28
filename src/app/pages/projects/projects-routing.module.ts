import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { NotesComponent } from './pages/notes/notes.component';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { PinturilloComponent } from './pages/pinturillo/pinturillo.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'app_notes',
    component: NotesComponent,
  },
  {
    path: 'ecommerce',
    component: EcommerceComponent,
  },
  {
    path: 'pinturillo',
    component: PinturilloComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
