import { Component, OnInit } from '@angular/core';
//Interfaces
import { Personaje } from './../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  personajes: Personaje [] = [
    {
      nombre:'Goku',
      poder:15000
    },
    {
      nombre:'Vegetta',
      poder:13000
    }
  ]
  nuevo:Personaje = {
    nombre:'',
    poder:0
  }

  agregarNuevoPersonaje( argumento: Personaje){
    console.log('MAIN PAGE COMPONENT');
    this.personajes.push(argumento);
    
  }
 
}
