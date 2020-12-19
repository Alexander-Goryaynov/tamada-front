import {Component, OnInit} from '@angular/core';
import {ChartOptions, ChartType} from 'chart.js';
import {Color, Label, MultiDataSet} from 'ng2-charts';
import {ChartData} from '../Models/chartData';
import {StatisticService} from '../Services/statistic.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public doughnutChartLabels: Label[];
  public legend;
  public chartDataset: ChartData[];

  constructor(private statisticService: StatisticService) {
    // todo
  }

  ngOnInit(): void {
    // todo
  }

  loadData(): void {
    // todo
  }
}
