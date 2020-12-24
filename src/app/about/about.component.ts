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
  chartDataset: ChartData[];
  private columns = 4;
  animators: AnimatorModel[] = [];

  constructor(
    private statisticService: StatisticService,
    private animatorService: AnimatorService
  ) {
  }

  ngOnInit(): void {
    this.chartDataset = this.statisticService.getEventsStats();
    this.animatorService
      .getAnimatorsWithPhotos()
      .subscribe(result => {
        for (let i = 0; i < result.animators.length; i++) {
          let animator = result.animators[i];
          this.animators.push(new AnimatorModel(
            animator.id,
            animator.name,
            animator.age,
            animator.description,
            animator.motto,
            animator.price,
            animator.image
          ));
        }
      });
    this.animatorService.getAnimatorsWithSchedules();
  }
}
