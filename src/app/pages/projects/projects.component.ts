import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      urlImage: 'assets/proyects/chat/conversation.png',
      name: 'Chat',
      creationYear: '2019',
      link: 'chat',
    },
    {
      urlImage: 'assets/proyects/notes/1.png',
      name: 'App notes',
      creationYear: '2020',
      link: 'app_notes',
    },
    {
      urlImage: 'assets/proyects/ecommerce/1.png',
      name: 'Ecommerce',
      creationYear: '2020',
      link: 'ecommerce',
    },
    {
      urlImage: 'assets/proyects/pinturillo/inicio.jpg',
      name: 'Pinturillo',
      creationYear: '2023',
      link: 'pinturillo',
    },
  ];

  constructor() {}
}
