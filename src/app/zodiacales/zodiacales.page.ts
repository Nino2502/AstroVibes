import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zodiacales',
  templateUrl: './zodiacales.page.html',
  styleUrls: ['./zodiacales.page.scss'],
})
export class ZodiacalesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToHome() {
    this.router.navigate(['/grid-page']); // Cambia a la ruta de tu menú principal
  }

}
