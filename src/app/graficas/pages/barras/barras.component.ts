import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
    selector: 'app-barras',
    templateUrl: 'barras.component.html',
    styleUrls: ['barras.component.css']
})
export class BarrasComponent implements OnInit {

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
        // Do nothing
    }

    randomize(): void {
        this.barChartData.datasets[0].data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.round(Math.random() * 125),
            56,
            Math.round(Math.random() * 150),
            40 ];
        this.barChartData.datasets[2].data = [
            11,
            Math.round(Math.random() * 150),
            22,
            Math.round(Math.random() * 125),
            14,
            Math.round(Math.random() * 100),
            71 ];

        this.chart?.update();
    }


}

