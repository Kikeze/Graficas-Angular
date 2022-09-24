import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

    menu: MenuItem[] = [
        {ruta: "/graficas/barras", texto: "Barras"},
        {ruta: "/graficas/grafica-doble", texto: "Grafica Doble"},
        {ruta: "/graficas/pastel", texto: "Pastel"},
        {ruta: "/graficas/pastel-http", texto: "Pastel HTTP"}
    ];

    constructor() {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

}


interface MenuItem {
    ruta: string;
    texto: string;
}

