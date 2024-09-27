import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importa el Router


@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.page.html',
  styleUrls: ['./grid-page.page.scss'],
})
export class GridPagePage implements OnInit {


  constructor(private router: Router) { 

  }

  ngOnInit() {
    console.log("Hola soy las paginas de horoscopos");


  }
  navigateToHoroscopes(){

    console.log("Voy a redirecionar a horoscopos....");
    this.router.navigate(['/horoscopos']);
   
  }

  navigateToZodiacales(){
    console.log("Redireccionando a zodiacal. . .")

    this.router.navigate(['/zodiacales']);
    
  }

  /*

  Tauro(){

    console.log("Voy a redireccionar tauro . . . .");

  }
  Picis(){

    console.log("Voy a redireccionar a picis . . . ");
  }

  */





}




