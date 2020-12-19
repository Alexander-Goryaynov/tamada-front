import {Component, OnInit} from '@angular/core';
import {ChartOptions, ChartType} from 'chart.js';
import {Color, Label, MultiDataSet} from 'ng2-charts';
import {ChartData} from '../Models/chartData';
import {StatisticService} from '../Services/statistic.service';
import {AnimatorService} from '../Services/animator.service';
import {AnimatorModel} from '../DataStorage/DataModels/AnimatorModel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private doughnutChartLabels: Label[] = [' '];
  private legend = false;
  private doughnutChartData: MultiDataSet;
  private chartOptions: ChartOptions = {
    tooltips: {
      enabled: false
    },
    cutoutPercentage: 86,
    animation: {
      duration: 3500
    }
  };
  private colors: Color[] = [
    {
      backgroundColor: ['rgba(248,92,56,1)', 'rgba(255,202,160,1)']
    }
  ];
  private chartDataset: ChartData[];
  private columns = 4;
  private animators: AnimatorModel[];

  constructor(
    private statisticService: StatisticService,
    private animatorService: AnimatorService
  ) {
  }

  ngOnInit(): void {
    this.statisticService.getEventsStats().subscribe(result => {
      this.chartDataset = result;
    });
    this.animators = this.animatorService.getAnimatorsWithPhotos();
  }
}
