import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Heroecomponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
@NgModule ({
    declarations: [
        Heroecomponent,
        ListadoComponent

    ],
    imports: [
CommonModule
    ]
})
export class HeroeModule{}