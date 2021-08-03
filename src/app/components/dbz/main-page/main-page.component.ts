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
  nuevo: Personaje={
    nombre:'',
    poder:0
  }  

  agregar(){
    if(this.nuevo.nombre.trim().length === 0 ){return;}    

    //agregando al array
    this.personajes.push(this.nuevo);
    //borando el form para agregar otro
    this.nuevo = {
      nombre:'',
      poder:0
    }
    console.log(this.nuevo);      
  }
  
}
