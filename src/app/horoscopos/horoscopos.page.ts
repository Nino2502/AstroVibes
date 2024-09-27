import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-horoscopos',
  templateUrl: './horoscopos.page.html',
  styleUrls: ['./horoscopos.page.scss'],
})
export class HoroscoposPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToHome() {
    this.router.navigate(['/grid-page']); // Cambia a la ruta de tu menú principal
  }

}
