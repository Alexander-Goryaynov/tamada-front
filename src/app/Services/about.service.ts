import {ChartData} from '../Models/chartData';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  getEventsStats(): ChartData[] {
    const result = [
      {name: 'Свадьбы', data: [[70, 100 - 70]]},
      {name: 'Дни рождения', data: [[70, 100 - 70]]},
      {name: 'Выпускные', data: [[70, 100 - 70]]},
      {name: 'Юбилеи', data: [[70, 100 - 70]]},
    ];
    return result;
  }
}
