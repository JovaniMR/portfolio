import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ChatComponent } from './pages/chat/chat.component';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { NotesComponent } from './pages/notes/notes.component';
import { PinturilloComponent } from './pages/pinturillo/pinturillo.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProjectsComponent,
    ChatComponent,
    EcommerceComponent,
    NotesComponent,
    PinturilloComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule, RouterModule, SharedModule],
})
export class ProjectsModule {}
