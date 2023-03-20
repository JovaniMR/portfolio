import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { ChatComponent } from './pages/chat/chat.component';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { NotesComponent } from './pages/notes/notes.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrincipalComponent,
    CurriculumComponent,
    ProyectsComponent,
    ChatComponent,
    EcommerceComponent,
    NotesComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
