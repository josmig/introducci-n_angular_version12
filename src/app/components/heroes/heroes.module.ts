import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoComponent } from './listado/listado.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
    declarations:[
        HeroComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule //este modulo trae como directivas y resulta ser importante
    ]
})
export class HeroesModule{}
