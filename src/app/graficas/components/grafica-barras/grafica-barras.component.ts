import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
    selector: 'app-grafica-barras',
    templateUrl: 'grafica-barras.component.html',
    styleUrls: ['grafica-barras.component.css']
})
export class GraficaBarrasComponent implements OnInit {

    @Input() horizontal: boolean = false;

    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

    barChartOptions: ChartConfiguration['options'] = {
        responsive: true
    };

    barChartType: ChartType = 'bar';

    barChartData: ChartData<'bar'> = {
        labels: [ '2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
        datasets: [
            { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
            { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' },
            { data: [ 11, 15, 22, 90, 14, 41, 71 ], label: 'Series C' }
        ]
    };

    constructor() {
        // Do nothing
    }

    ngOnInit(): void {
        if( this.horizontal ) {
            this.barChartType = "line";
        }
        else {
            this.barChartType = "bar";
        }
        // Do nothing
    }

}
