import {Component} from "@angular/core";

@Component({
    selector:'app-hero',
    templateUrl:'./hero.component.html'
})

export class HeroComponent{
 nombre: string = 'Iron Man';
 edad: number= 45;


//Como es una clase podemos crear los getters y setters
get nombreCapitalizado(){ //cuando es un get va como una variable normal a la vista.
    return this.nombre.toUpperCase();
}

obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}` ;
}

cambiarNombre(): void{
    this.nombre = 'Spiderman';
}
cambiarEdad(): void{
    this.edad= 30;
}
}