import { Component, OnInit } from '@angular/core';
import {StatisticService} from '../Services/statistic.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private service: StatisticService) {
    // todo
  }

  ngOnInit(): void {
    // todo
  }

  private loadEventsList(): void {
    // todo
  }

}
