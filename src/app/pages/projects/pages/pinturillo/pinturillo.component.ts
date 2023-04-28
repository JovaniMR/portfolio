import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinturillo',
  templateUrl: './pinturillo.component.html',
  styleUrls: ['./pinturillo.component.css'],
})
export class PinturilloComponent implements OnInit {
  projectDescription: string =
    'Esta aplicación web tiene la funcionalidad de dibujar en tiempo real junto a otros usuarios por medio de un grupo, el cual permite unirte mediante un nickname. Permite además visualizar los usuarios conectados (en linea), enviar y recibir mensajes en tiempo real con los usuarios que se encuentran conectados (chat de grupo).';
  projectInfo: Object = {
    technologies: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Javascript',
      'Angular (v15.x)',
      'Node js',
      'Express',
      'Socket io',
    ],
    url: [
      {
        description: 'URL de GitHub Frontend',
        href: 'https://github.com/JovaniMR/pinturillo_frontend',
        name: 'Pinturillo Frontend',
      },
      {
        description: 'URL de GitHub Backend',
        href: 'https://github.com/JovaniMR/pinturillo_backend',
        name: 'Pinturillo Backend',
      },
      {
        description: 'URL video DEMO',
        href: 'https://youtu.be/7s-XFWzCMUQ',
        name: 'Pinturillo DEMO',
      },
    ],
  };
  slider: Object = {
    file: 'assets/proyects/pinturillo/',
    images: ['inicio.jpg', 'principal.jpg', '1.jpg', 'chat.jpg'],
  };

  constructor() {}

  ngOnInit(): void {}
}
