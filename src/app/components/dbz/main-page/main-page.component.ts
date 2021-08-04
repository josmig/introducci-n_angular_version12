import { Component, OnInit } from '@angular/core';
//Interfaces
import { Personaje } from './../interfaces/dbz.interface';
//Service
import { DBZService } from './../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
      
  nuevo:Personaje = {
    nombre:'',
    poder:0
  }
  
  constructor(){}
 
}
