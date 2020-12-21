import {Component, OnInit} from '@angular/core';
import {ChartOptions, ChartType} from 'chart.js';
import {Color, Label, MultiDataSet} from 'ng2-charts';
import {ChartData} from '../Models/chartData';
import {StatisticService} from '../Services/statistic.service';
import {AnimatorService} from '../Services/animator.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  chartDataset: ChartData[];

  constructor(
    private statisticService: StatisticService,
    private animatorService: AnimatorService
  ) {
  }

  ngOnInit(): void {
  }

  loadData(): void {
  }
}
