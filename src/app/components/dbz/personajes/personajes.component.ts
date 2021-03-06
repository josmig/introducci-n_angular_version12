import { DBZService } from './../services/dbz.service';
import { Personaje } from './../interfaces/dbz.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{
  
  //Con este input estamos diciendo que el componente padre nos esta pasando valores 
/*   @Input() personajee:Personaje[] = []; */
    
  constructor(private dbzService: DBZService){}
  get personajes(){
    return this.dbzService.personajes
  }

}
