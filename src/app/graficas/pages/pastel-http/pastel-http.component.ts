import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { GraficasService } from 'src/app/graficas/services/graficas.service';


@Component({
    selector: 'app-pastel-http',
    templateUrl: 'pastel-http.component.html',
    styleUrls: ['pastel-http.component.css']
})
export class PastelHttpComponent implements OnInit {

    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

    doughnutChartLabels: string[] = [];

    doughnutChartData: ChartData<'doughnut'> = {
        labels: this.doughnutChartLabels,
        datasets: [
            { data: [] }
        ]
    };

    doughnutChartType: ChartType = 'doughnut';

    constructor(
        private GraficasSvc: GraficasService
    ) {
        // Do nothing
     }

    ngOnInit(): void {
        this.GraficasSvc.getPreferencia().subscribe({
            next: (v) => {
                const keys = Object.keys(v).map(m => m[0].toUpperCase() + m.substring(1));
                const values = Object.values(v);

                this.doughnutChartData.labels = keys;
                this.doughnutChartData.datasets[0].data = values;

                this.chart?.update();
            },
            error: (e) => {
                console.error(e);
            },
            complete: () => {
                console.log("Termina consulta de preferencia");
            }
        });
    }

}
