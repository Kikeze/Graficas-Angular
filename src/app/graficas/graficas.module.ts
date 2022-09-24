import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { GraficasRoutingModule } from 'src/app/graficas/graficas-routing.module';
import { BarrasComponent } from 'src/app/graficas/pages/barras/barras.component';
import { GraficaDobleComponent } from 'src/app/graficas/pages/grafica-doble/grafica-doble.component';
import { PastelComponent } from 'src/app/graficas/pages/pastel/pastel.component';
import { PastelHttpComponent } from 'src/app/graficas/pages/pastel-http/pastel-http.component';
import { GraficaBarrasComponent } from 'src/app/graficas/components/grafica-barras/grafica-barras.component';


@NgModule({
    declarations: [
        BarrasComponent,
        GraficaDobleComponent,
        PastelComponent,
        PastelHttpComponent,
        GraficaBarrasComponent,
    ],
    imports: [
        CommonModule,
        NgChartsModule,
        GraficasRoutingModule,
    ]
})
export class GraficasModule { }
