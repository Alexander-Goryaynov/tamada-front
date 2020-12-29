import {ChartData} from '../Models/chartData';
import {Injectable} from '@angular/core';
import {apiUrl} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {EventsStatistic} from '../Models/eventsStatictic';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  private statisticsApiUrl = `${apiUrl}/statistics/v1/events`;

  constructor(private http: HttpClient) {
    // todo
  }

  getEventsStats(): ChartData[] {
    let result: ChartData[] = [];
    this.http
      .get<EventsStatistic>(this.statisticsApiUrl)
      .subscribe(
        stat => {
          console.log('СТАТА');
          console.log(stat);
          for (let i = 0; i < stat.statistics.length; i++) {
            let circle = stat.statistics[i];
            let filledPercent = circle.count / stat.total * 100;
            let emptyPercent = 100 - filledPercent;
            result.push(new ChartData(circle.event, [[filledPercent, emptyPercent]]));
          }
        }
      );
    return result;
  }
}
