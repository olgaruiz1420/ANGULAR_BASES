import { Component } from "@angular/core";

@Component({

    selector: 'app-heroe',
    templateUrl: 'Heroe.component.html'
})

export class Heroecomponent{

    nombre: string = 'Iroman';
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre} - ${ this.edad}`
        //return this.nombre + ' - ' + this.edad.toString()
    }

    cambiarNombre(): void{
        this.nombre = 'Pantera Negra';
    }

    cambiarEdad(): void{
        this.edad = 66 ;
    }

}