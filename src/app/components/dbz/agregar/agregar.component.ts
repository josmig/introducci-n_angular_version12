import { DBZService } from './../services/dbz.service';
import { Component,Input} from '@angular/core';
import { Personaje } from './../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  /* @Input() personajes: Personaje[] = []; */
  @Input() nuevo: Personaje={
    nombre:'',
    poder:0
  }  
  //EventEmitter emite valores tipo any pero nosotros queremos recibir de tipo Personaje
  /* @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); */
  
  constructor(private _dbzService: DBZService){}

  agregar(){
    if(this.nuevo.nombre.trim().length === 0 ){return;}    

    //agregando al array
    /* this.personajes.push(this.nuevo); */
    console.log(this.nuevo);
    this._dbzService.agregarPersona(this.nuevo);
    //borando el form para agregar otro
    this.nuevo = {
      nombre:'',
      poder:0
    }

    /* console.log(this.personajes); */
         
  }
   

}
