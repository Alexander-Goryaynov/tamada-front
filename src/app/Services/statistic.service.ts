import {ChartData} from '../Models/chartData';
import {Injectable} from '@angular/core';
import {apiUrl} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  private statisticsApiUrl = `${apiUrl}/statistics/v1/events`;

  constructor(private http: HttpClient) {
    // todo
  }

  getEventsStats(): Observable<ChartData[]> {
    const result = [
      {name: 'Свадьбы', data: [[20, 30]]},
      {name: 'Дни рождения', data: [[60, 90]]},
      {name: 'Выпускные', data: [[15, 85]]},
      {name: 'Юбилеи', data: [[5, 95]]},
    ];
    return of(result);
  }
}
