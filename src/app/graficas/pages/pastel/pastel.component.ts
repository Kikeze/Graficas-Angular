import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
    selector: 'app-pastel',
    templateUrl: 'pastel.component.html',
    styleUrls: ['pastel.component.css']
})
export class PastelComponent implements OnInit {

    doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];

    doughnutChartData: ChartData<'doughnut'> = {
        labels: this.doughnutChartLabels,
        datasets: [
            { data: [ 350, 450, 100 ] },
            { data: [ 50, 150, 120 ] },
            { data: [ 250, 130, 70 ] }
        ]
    };

    doughnutChartType: ChartType = 'doughnut';

    constructor() {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

}
