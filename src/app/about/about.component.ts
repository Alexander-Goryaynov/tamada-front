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

  public doughnutChartLabels: Label[] = [' '];
  public legend = false;
  public doughnutChartData: MultiDataSet;
  public chartOptions: ChartOptions = {
    tooltips: {
      enabled: false
    },
    cutoutPercentage: 86,
    animation: {
      duration: 3500
    }
  };
  public colors: Color[] = [
    {
      backgroundColor: ['rgba(248,92,56,1)', 'rgba(255,202,160,1)']
    }
  ];
  public chartDataset: ChartData[];

  constructor(private statisticService: StatisticService) {
  }

  ngOnInit(): void {
    this.chartDataset = this.statisticService.getEventsStats();
  }
}
