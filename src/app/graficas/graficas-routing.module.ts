import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarrasComponent } from 'src/app/graficas/pages/barras/barras.component';
import { GraficaDobleComponent } from 'src/app/graficas/pages/grafica-doble/grafica-doble.component';
import { PastelComponent } from 'src/app/graficas/pages/pastel/pastel.component';
import { PastelHttpComponent } from 'src/app/graficas/pages/pastel-http/pastel-http.component';


const routes: Routes = [
    {
        path: "",
        children: [
            {path: "barras", component: BarrasComponent},
            {path: "grafica-doble", component: GraficaDobleComponent},
            {path: "pastel", component: PastelComponent},
            {path: "pastel-http", component: PastelHttpComponent},
            {path: "**", redirectTo: "barras"}
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GraficasRoutingModule { }
