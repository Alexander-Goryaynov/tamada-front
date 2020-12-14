import {ChartData} from '../Models/chartData';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  getEventsStats(): ChartData[] {
    const result = [
      {name: 'Свадьбы', data: [[20, 30]]},
      {name: 'Дни рождения', data: [[60, 90]]},
      {name: 'Выпускные', data: [[15, 85]]},
      {name: 'Юбилеи', data: [[5, 95]]},
    ];
    return result;
  }
}
