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

  private statisticsApiUrl = `${apiUrl}/statistics/v1/events`;

  constructor(private http: HttpClient) {
    // todo
  }

  getEventsStats(): ChartData[] {
    let result: ChartData[] = [];
    let absoluteCounts: number[] = [];
    let categories: string[] = [];

    for (let i = 0; i < Object.keys(EventType).length; i++) {
      absoluteCounts.push(0);
      categories.push(Object.values(EventType)[i]);
    }
    let orders = AppComponent.database.getAllOrders();

    // получаем кол-во заказов по типам мероприятий
    let j = 0;
    categories.forEach((type, j, categories) => {
      orders.forEach((order, i, orders) =>
        {
          if (order.eventType.toString() === type) {
            absoluteCounts[j] += 1;
          }
        }
      );
      j++;
    });
    let totalCount = absoluteCounts.reduce((x:number, y:number) => x + y);
    // находим процентные соотношения и записываем в результат
    absoluteCounts.forEach((i, ix, absoluteCounts) => {
        i = i / totalCount * 100;
        result.push(new ChartData(categories[ix], [[i, 100 - i]]));
      }
    );
    console.log(result);
    return result;
  }
}
