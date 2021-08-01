import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'  
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Thor','IronMan','Hawkaye','Capitan America'];  
  
  heroeBorrado: string = '';

  delete(){
    /* console.log('Borrando...');     */
    /* this.heroes.splice(i,1); */
    this.heroeBorrado =this.heroes.shift() || '';
    //shift devuelve un string o undifened por eso es recomendable mandar tambien un array vacio
    
    
  }

}
