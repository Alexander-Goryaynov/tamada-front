import {ChartData} from '../Models/chartData';
import {Injectable} from '@angular/core';
import {apiUrl} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {EventType} from '../DataStorage/Enums/EventType';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  private statisticsApiUrl: string;

  constructor(private http: HttpClient) {
  }

  getEventsStats(): ChartData[] {
    return [];
  }
}
