import {ChartData} from '../Models/chartData';
import {Injectable} from '@angular/core';
import {apiUrl} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  private statisticsApiUrl: string;

  constructor(private http: HttpClient) {
    // todo
  }

  getEventsStats(): Observable<ChartData[]> {
    // todo
    return new Observable<ChartData[]>();
  }
}
