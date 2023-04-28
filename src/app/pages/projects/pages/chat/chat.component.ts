import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  projectDescription: string =
    'Esta aplicación web tiene la funcionalidad de permitir la comunicación en tiempo real con los usuarios registrados en la aplicación, ofrece una experiencia similar a whatsapp web gracias a su interfaz. Además permite gestionar la información de perfil del usuario(correo, contraseña, foto), asi como el registro de nuevos usuarios e inicio de sesión.';
  projectInfo: Object = {
    technologies: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Javascript',
      'Vue js',
      'Laravel',
      'Socket.io',
      'MySQL',
    ],
    url: [
      {
        description: 'URL de GitHub',
        href: 'https://github.com/JovaniMR/messenger',
        name: 'Chat',
      },
    ],
  };
  slider: Object = {
    file: 'assets/proyects/chat/',
    images: [
      'conversation.png',
      'emojis.png',
      'login.png',
      'profile.png',
      'register.png',
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
