import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
})
export class EcommerceComponent implements OnInit {
  projectInfo: Object = {
    technologies: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Javascript',
      'Laravel',
      'API Paypal',
      'MySQL',
    ],
    url: [
      {
        description: 'URL de GitHub',
        href: 'https://github.com/JovaniMR/nutrition_store',
        name: 'Ecommerce',
      },
    ],
  };
  slider: Object = {
    file: 'assets/proyects/ecommerce/',
    images: [
      '1.png',
      '2.png',
      '3.png',
      '4.png',
      '5.png',
      '6.png',
      '7.png',
      '8.png',
      '9.png',
      '10.png',
      '11.png',
      '12.png',
      '13.png',
      '14.png',
      '15.png',
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
