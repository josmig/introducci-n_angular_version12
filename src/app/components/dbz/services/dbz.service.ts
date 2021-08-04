import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DBZService {

    private _personajes: Personaje [] = [
        {
          nombre:'Goku',
          poder:15000
        },
        {
          nombre:'Vegetta',
          poder:13000
        }
      ]
    get personajes(): Personaje[]{
        return [...this._personajes];
    }
    constructor(){
        console.log('Servicio Inicializado');        
    }
    agregarPersona( per: Personaje ){
        this._personajes.push(per);
    }
}