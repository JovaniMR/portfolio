import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  projectDescription: string =
    'Esta aplicación web tiene la funcionalidad de gestionar las notas de cada usuario de forma personal, permitiendo crear, editar y eliminarlas. Además cuenta con la funcionalidad de registro e inicio de sesión.';
  projectInfo: Object = {
    technologies: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Javascript',
      'VueJS',
      'Laravel',
      'MySQL',
    ],
    url: [
      {
        description: 'URL de GitHub',
        href: 'https://github.com/JovaniMR/app_notes',
        name: 'App Notes',
      },
    ],
  };
  slider: Object = {
    file: 'assets/proyects/notes/',
    images: ['1.png', '2.png', '3.png', '4.png'],
  };

  constructor() {}

  ngOnInit(): void {}
}
